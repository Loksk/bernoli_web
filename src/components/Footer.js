import "./Footer.css"

const Footer = ({scrollToSection}) => {
    return (
        <footer>
            <ul>
                <li>Kontaktné údaje:</li><br/>
                <li>Bernoli spol. s.r.o.</li>
                <li>E-Mail: info@bernoli.sk</li>
                <li>Tel.:&ensp; +421 907 954 208</li>
                <li>&emsp; &emsp; +421 917 597 312</li>
                <li>Fax:&ensp; +421 55 63 231 14</li>
            </ul>
            <ul>
                <li>Adresa:</li><br/>
                <li>Jakobyho 17,</li>
                <li>040 01 Košice</li>
                <li>IČO: 47 687 801</li>
                <li>IČ DPH: SK2024048070</li>
            </ul>
            <ul>
                <li>Zoznam odkazov:</li><br/>
                <li onClick={() => scrollToSection('section-4')} className="footer_link"><b>O nás</b></li>
                <li onClick={() => scrollToSection('section-1')} className="footer_link"><b>Domov</b></li>
                <li onClick={() => scrollToSection('section-3')} className="footer_link"><b>Realizácie</b></li>
                <li><b>Fotogaléria</b></li>
                <li><b>Kontakt</b></li>
            </ul>
            <ul>
                <li>Dokumenty:</li><br/>
                <li><b>Oprávnenia</b></li>
                <li><b>Všeobecné zmluvné podmienky</b></li>
                <li><b>Najčastejšie otázky</b></li>
                <li>© Bernoli, 2022</li>  
            </ul>
        </footer>
    )
}

export default Footer