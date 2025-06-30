import logo from '../assets/logo-header.svg'

const Logo = () => {
    return (
        <>
            <img
                src={logo}
                alt="Logotipo da aplicação"
                width={253}
                height={44}
            />
        </>
    );
}

export default Logo;