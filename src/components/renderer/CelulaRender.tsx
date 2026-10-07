import { useLayoutEffect, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { Celula, urlPiezas } from '@/lib/celulas';

// Tamaño al que se lleva cada modelo. Cada autor usó su propia escala (de
// milímetros de impresión a micrómetros), así que no hay una común: se
// normaliza y la cámara se coloca siempre a la misma distancia relativa.
const TAMANO = 20;

// Los modelos vienen comprimidos con meshopt (ver tools/celulas.py), cuyo
// decodificador va dentro del paquete. Draco se apaga (segundo argumento):
// useGLTF lo bajaría de un CDN de Google, y ninguno de nuestros modelos lo usa.
const Pieza: React.FC<{ url: string; color: string | null; opacity: number }> = ({ url, color, opacity }) => {
    const { scene } = useGLTF(url, false);

    const objeto = useMemo(() => {
        const copia = scene.clone(true);
        copia.traverse((o) => {
            const malla = o as THREE.Mesh;
            if (!malla.isMesh) return;
            // Las mallas convertidas desde STL a veces llegan sin normales, o con
            // las caras hacia dentro: se veían como siluetas negras.
            if (!malla.geometry.getAttribute('normal')) malla.geometry.computeVertexNormals();
            // La mayoría de los modelos salen de impresión 3D y no traen color:
            // se pinta cada pieza para distinguir, por ejemplo, célula y núcleo.
            if (color) {
                malla.material = new THREE.MeshStandardMaterial({
                    color, roughness: 0.55, metalness: 0.05,
                    side: THREE.DoubleSide,
                    transparent: opacity < 1, opacity,
                });
            }
            malla.castShadow = true;
            malla.receiveShadow = true;
        });
        return copia;
    }, [scene, color, opacity]);

    return <primitive object={objeto} />;
};

export const CelulaRender: React.FC<{ celula: Celula; opacity: number }> = ({ celula, opacity }) => {
    const urls = urlPiezas(celula);
    const grupo = useRef<THREE.Group>(null);
    const { camera, controls } = useThree();

    // useGLTF suspende hasta que todas las piezas cargan, así que al llegar
    // aquí la caja de la escena ya es la definitiva.
    useLayoutEffect(() => {
        const g = grupo.current;
        if (!g) return;
        g.scale.setScalar(1);
        g.position.set(0, 0, 0);
        g.updateMatrixWorld(true);
        const caja = new THREE.Box3().setFromObject(g);
        const tam = caja.getSize(new THREE.Vector3());
        const centro = caja.getCenter(new THREE.Vector3());
        const escala = TAMANO / Math.max(tam.x, tam.y, tam.z, 1e-6);
        g.scale.setScalar(escala);
        g.position.copy(centro.multiplyScalar(-escala));

        // Muchos modelos se diseñaron para imprimirse acostados: vistos desde el
        // frente quedaban de canto, reducidos a una línea. La cámara mira a lo
        // largo del eje más corto, que deja de frente la cara más grande.
        const ejes = [tam.x, tam.y, tam.z];
        const corto = ejes.indexOf(Math.min(...ejes));
        const dir = new THREE.Vector3().setComponent(corto, 1);
        // Una pizca de inclinación da volumen; si se mira desde arriba, el
        // «arriba» de la cámara pasa a ser el eje Z para no girar la imagen.
        const arriba = corto === 1 ? new THREE.Vector3(0, 0, -1) : new THREE.Vector3(0, 1, 0);
        const persp = camera as THREE.PerspectiveCamera;
        persp.up.copy(arriba);
        persp.position.copy(dir.multiplyScalar(TAMANO * 3).addScaledVector(arriba, TAMANO * 0.25));
        persp.near = 0.05;
        persp.far = TAMANO * 50;
        persp.updateProjectionMatrix();
        persp.lookAt(0, 0, 0);
        const ctrl = controls as unknown as { target: THREE.Vector3; update: () => void } | null;
        if (ctrl) {
            ctrl.target.set(0, 0, 0);
            ctrl.update();
        }
        // La cámara es la misma que usan las moléculas: al salir de la célula
        // se le devuelve la orientación normal, o la siguiente molécula se vería girada.
        return () => {
            persp.up.set(0, 1, 0);
        };
    }, [celula, camera, controls]);

    return (
        <>
        {/* Luz de ambiente propia: con solo las luces del visor de moléculas,
            los colores claros de las células salían apagados. */}
        <hemisphereLight args={['#ffffff', '#3f3f46', 1.1]} />
        <group ref={grupo}>
            {celula.piezas.map((p, n) => (
                <Pieza key={urls[n]} url={urls[n]} color={p.color} opacity={opacity} />
            ))}
        </group>
        </>
    );
};
