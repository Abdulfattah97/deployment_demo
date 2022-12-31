import Main from "./components/main";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Servises from "./components/Services";
import About from "./components/AboutUs";
import SerTitle from "./components/ServiceTitle";
import AbouTitle from "./components/AboutTitle"
import Whats from "./components/WhatsApp";

function App() {
  return (
    <div>
      <NavBar />
      <Whats />
      <Main />
      <SerTitle />
      <Servises />
      <AbouTitle />
      <About />
      <Footer />
    </div>

  );
}

export default App;
