import './assets/styles/theme.css';
import logo from '../assets/logo-footer.svg'

export function Footer() {  // Exportação nomeada explícita
    return (
        <>
        <h1>Rodapé</h1>
        <img
            src={logo}
            alt="Logotipo da aplicação"
            width={253}
            height={44}
        />
        </>
    );
}