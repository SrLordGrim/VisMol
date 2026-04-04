import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("No se pudo encontrar el elemento raíz para montar.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <App />
);

