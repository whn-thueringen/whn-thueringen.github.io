import { render } from 'solid-js/web';
import App from './app.tsx';

const rootElement = document.getElementById('Kontakt');
if (rootElement) {
    render(() => <App />, rootElement);
}
