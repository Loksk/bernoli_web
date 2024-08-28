import "./O nas.css"

const ONas = () => {
    return (
        <div id="section-4" className="oNas">
            <h2>O NÁS</h2>
            <div className="oNas-grid">
                <div className="oNas-text">
                    <div className="oNas-text-inside">
                        <p className="text-p1">Spoločnosť Bernoli spol. s.r.o. je držiteľom oprávnení na vykonávanie revíznych činností, montážnych prác a opráv vyhradených technických zariadení plynových a tlakových.</p>
                        <p className="text-p2">Mimo špecializácie na medicinálne, technické a vykurovacie plyny sa venujeme tiež inštaláciám potrubných rozvodov a technológiám pre distribúciu tekutých, plynných a sypkých materiálov, ako aj bežným občianskym stavbám (voda, plyn, kúrenie), drobným konštrukčným prácam a podobne.</p>
                        <div className="oNas-text-grid">
                            <ul className="text-p3">
                                <li><b>Adresa:</b></li><br/>
                                <li>Jakobyho 17,</li>
                                <li>040 01 Košice</li><br/>
                                <li><b>IČO:</b> 47 687 801</li> 
                                <li><b>IČ DPH:</b> SK2024048070</li>
                            </ul>
                            <ul className="text-p4">
                                <li><b>Kontakt:</b></li><br/>
                                <li>Bernoli spol. s.r.o.</li>
                                <li><b>email:</b> info@bernoli.sk</li>
                                <li><b>tel.:</b> +421907954208</li>
                                <li><b>tel.:</b> +421917597312</li>
                                <li><b>fax:</b> +421556323114</li>
                            </ul>
                        </div>
                        <p className="text-p5"><b>MÁTE ZÁUJEM O SLUŽBY V OBLASTI TECHNICKÝCH, MEDICINÁLNYCH ALEBO VYKUROVACÍCH PLYNOV?</b></p>
                        <button className="kontakt-button">KONTAKTUJTE NÁS</button>
                    </div>
                </div>
                <div className="oNas-mapa">
                    <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.63916987215!2d21.257700676422782!3d48.73148600962892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0898616cedd%3A0x30a1ea36ed2647ef!2sTAPER%20spol.%20s%20r.o.!5e0!3m2!1sen!2ssk!4v1721233784931!5m2!1sen!2ssk" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ONas;