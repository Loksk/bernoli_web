import "./Header.css"

const Header = ({scrollToSection}) => {
    return(
        <header id="section-1">
            <img className="header-logo" src={process.env.PUBLIC_URL + '/img/logo-transparent.png'} alt=""/>
            <div className="header-sluzby" onClick={() => scrollToSection("section-2")}>
                <h>Služby</h>
            </div>
            <div className="header-realizacie" onClick={() => scrollToSection('section-3')}>
                <h>Realizácie</h>
            </div>
            <div className="header-oNas" onClick={() => scrollToSection('section-4')}>
                <h>O nás</h>
            </div>
            <div className="header-kontakt">
                <h>Kontakt</h>
            </div>
        </header>
    );
}

export default Header;