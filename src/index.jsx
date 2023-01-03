import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('rootNode');
const rootNode = document.getElementById('root');
console.log('rootNode1', rootNode);
ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
