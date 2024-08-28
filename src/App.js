import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Index from "./components/Index";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth', inline: 'start'});
  }

  return (
      <div>
        <Header scrollToSection={scrollToSection}/>
          <Index scrollToSection={scrollToSection}/>
        <Footer scrollToSection={scrollToSection}/>
      </div>
  );
}

export default App;
