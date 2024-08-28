import "./Realizacie.css"

const Realizacie = () => {
    return (
        <div id="section-3" className="realizacie">
            <h2>REALIZÁCIE</h2>
            <div className="realizacie-grid">
                <div className="galeria">
                    <button className="galeria-button">GALÉRIA REALIZOVANÝCH PROJEKTOV</button>
                </div>
                <div className="zakaznici">
                    <ul>
                        <li>Medzi spokojných zákazníkov patria napriklad:</li><br/>
                        <li>Messer Tatragas s.r.o.,</li>
                        <li>Air Liquide Slovakia s.r.o. (aktuálne súčasťou Messer Tatragas),</li>
                        <li>SWEP Slovakia s.r.o.,</li>
                        <li>Magna PT s.r.o.,</li>
                        <li>Handtmann Slovakia s.r.o.,</li>
                        <li>Oerlikon Balzers Coating Slovakia s.r.o.,</li>
                        <li>Andritz Slovakia s.r.o.,</li>
                        <li>Probugas a.s.,</li>
                        <li>SIAD Slovakia s.r.o.,</li>
                        <li>Michatek Michalovce k.s.,</li>
                        <li>Kvatromed s.r.o., </li>
                        <li>UPJŠ KE,</li>
                        <li>UNLP KE,</li>
                        <li>Nemocnica Šaca,</li>
                        <li>DFN Košice,</li>
                        <li>VUSCH Košice,</li>
                        <li>Nemocnica Rimavská Sobota,</li>
                        <li>Nemocnica Svidnik,</li>
                        <li>SVP laboratória KE,</li><br/>
                        <li>a mnoho ďalších.</li>
                    </ul>
                </div>
                <div className="technologie">
                    <p>TECHNOLÓGIE SPÁJANIA</p>
                </div>
                <div className="technologie-paragraf">
                    <ul>
                        <li>závitové spoje,</li>
                        <li>zváranie (plameň, oblúk, TIG, WIG, CO2),</li>
                        <li>spájkovanie (mäkké, tvrdé),</li>
                        <li>lepenie,</li>
                        <li>elektrofúzne zváranie,</li>
                        <li>lisovanie,</li>
                        <li>kompresné spoje na zarezne prstence</li>
                    </ul>
                </div>
                <div className="materialy">
                    <p>BEŽNE POUŽÍVANÉ MATERIÁLY</p>
                </div>
                <div className="materialy-paragraf">
                    <ul>
                        <li>bežne zvariteľné ocele,</li>
                        <li>pozinkovaná oceľ tr.11,</li>
                        <li>nerezová oceľ tr.17,</li>
                        <li>meď,</li>
                        <li>plasty (PVC, PE, HT, PPR),</li>
                        <li>plast-AL</li>
                    </ul>
                </div>
            </div>
            <h2>BERNOLI V ČÍSLACH</h2>
            <div className="statistiky">
                <div className="statistiky-1">
                    <p className="p1">21</p>
                    <p className="p2">rokov na trhu</p>
                </div>
                <div className="statistiky-2">
                    <p className="p1">58</p>
                    <p className="p2">odborných zamestnancov</p>
                </div>
                <div className="statistiky-3">
                    <p className="p1">74</p>
                    <p className="p2">realizácií ročne</p>
                </div>
                <div className="statistiky-4">
                    <p className="p1">211</p>
                    <p className="p2">metrov potrubí ročne</p>
                </div>
            </div>
        </div>
    );
}

export default Realizacie;