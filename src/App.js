import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import { useState } from 'react';

function App() {
const [page, setPage] = useState('about')

const handlePage = ()=> {
  if(page === 'about'){
    return <AboutMe />
  }
  else if (page === 'contact'){
    return <Contact />
  }
  else {
    return <Portfolio />
  }
}
  return (
    <div className="App">
     <Header page={page} setPage={setPage} />
    <main>
      {handlePage()}
    </main>

         <Footer />
    </div>
  
  );
}

export default App;
