import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export function SearchBar() {  // Exportação nomeada explícita
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/products?filter=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>
                <FiSearch size={20} />
            </button>
        </div>
    );
}