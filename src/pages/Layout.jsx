import { Header } from '../components/Header.jsx'
import { Footer } from '../components/Footer.jsx'

// Definindo o componente de layout
const Layout = ({ children }) => {
    return (
    <>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      {children}

      {/* Componente do rodapé */}
      <Footer />
    </>
    );
};

export default Layout;