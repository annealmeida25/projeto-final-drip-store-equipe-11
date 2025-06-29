import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Logo />
                <nav className="main-nav">
                    <ul>
                        <li><a href="/products">Produtos</a></li>
                        <li><a href="/categories">Categorias</a></li>
                        <li><a href="/cart">Carrinho</a></li>
                        <li><a href="/account">Minha Conta</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;