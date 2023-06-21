import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';

function App() {

  return (
    <div className="App">
     <Header />
     <AboutMe />
     <Portfolio />
     <Contact />

     <Footer />
    </div>
  
  );
}

export default App;
