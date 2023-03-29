import './index.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AnimeScout from './components/AnimeScout';
import AnimeInfo from './components/AnimeInfo';
import Error from './components/ScoutError';
import About from './components/About';
import Contact from './components/Contact';



// this is the app component where we define what is rendered and how the routes is structured

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<AnimeScout />} />
        <Route path='/scout' element={<AnimeScout />} />
        <Route path='/animeInfo/:animeDetails' element={<AnimeInfo />} />
        <Route path='/*' element={<Error />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer /> 
    </div>
  );
}

export default App;
