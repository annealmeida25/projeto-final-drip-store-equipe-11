import './assets/styles/theme.css';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export function MainNav() {  // Exportação nomeada explícita
    return (
        <nav className={styles.mainNav}>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/products">
                Produtos
            </NavLink>
            <NavLink to="/categories">
                Categorias
            </NavLink>
            <NavLink to="/orders">
                Meus Pedidos
            </NavLink>
        </nav>
    );
}