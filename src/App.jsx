import perfil from "./assets/perfil.png";
import About from "./assets/componentes/About";
import Skills from "./assets/componentes/Skills";
import Certificados from "./assets/componentes/Certificados";
import Introducao from "./assets/componentes/Introducao";
import Header from "./assets/componentes/Header";
import Contacto from "./assets/componentes/Contacto";
import Footer from "./assets/componentes/Footer";

function App() {
  return (
    <div className="bg-red-500">
      <Header />

      <div className="flex justify-center mt-20">
        <img className="h-50 w-60 rounded-full" src={perfil} alt="logo" />
      </div>
      <div>
        <Introducao />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Certificados />
      </div>
      <div>
        <Contacto />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
