import "./Index.css"
import ONas from "./O nas";
import Realizacie from "./Realizacie";
import Sluzby from "./Sluzby";


const Index = ({scrollToSection}) => {
    return (
        <main>
            <div>
                <img className="logo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt=""/>
                <div className="h1-main">
                    <h1>TECHNICKÉ, MEDICINÁLNE A VYKUROVACIE PLYNY</h1>
                </div>
                <div className="h2-main">
                    <h2>TECHNICKÁ PODPORA A MONTÁŽ</h2>
                </div>
                <div className="h3-main">
                    <h3>
                        Úzko spolupracujeme s nástrojárňou, projekčnou kanceláriou, elektrotechnickými pracovníkmi, ako aj dodávateľskými spoločnosťami, a preto Vám vieme poskytnúť ucelené služby v oblasti.
                    </h3>
                </div>
            </div>
            <button className="button-viac-main" onClick={() => scrollToSection('section-2')}>VIAC</button>
            <Sluzby/>
            <Realizacie/>
            <ONas/>
        </main>
    );
}

export default Index