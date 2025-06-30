import './assets/styles/theme.css';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/mini-cart.svg';

export function AuthLinks() {  // Exportação nomeada explícita
  return (
    <div className={styles.authArea}>
            <Link to="/register" className={styles.registerLink}>
                Cadastre-se
            </Link>
            <Link to="/login" className={styles.loginButton}>
                Entrar
            </Link>
            <img src={cartIcon} alt="Carrinho" className={styles.miniCart} />
        </div>
  );
}