import Reactdom from 'react-dom/client'
import App from './App.jsx'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/soho-light/theme.css';
import 'primereact/resources/primereact.min.css';

Reactdom.createRoot(document.getElementById('root')).render(
    <App />
)