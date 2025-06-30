import styles from './Header.module.css';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { AuthLinks } from './AuthLinks';
import { MainNav } from './MainNav';

export function Header() {  // Adicione 'default'
    return (
        // <header className="app-header">
        <header className={styles.appHeader}>
            <div className={styles.headerTop}>
                <Logo />
                <SearchBar />
                <AuthLinks />
            </div>
            <MainNav />
        </header>
    );
}