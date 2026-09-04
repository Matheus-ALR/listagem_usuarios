import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const elementoRaiz = document.getElementById('root');

createRoot(elementoRaiz).render(
	<StrictMode>
		<App />
	</StrictMode>
);
