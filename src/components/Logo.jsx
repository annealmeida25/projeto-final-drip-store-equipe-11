import logo from '../assets/logo-header.svg'

export function Logo() {  // Exportação nomeada explícita
  return (
    <img 
      src={logo} 
      alt="Logotipo da aplicação" 
      width={253} 
      height={44}
    />
  );
};