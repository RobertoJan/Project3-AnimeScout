import './index.css';
import { Route, Routes, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import AnimeScout from './components/AnimeScout';
import AnimeInfo from './components/AnimeInfo';






function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/scout' element={<AnimeScout />} />
        <Route path='/animeInfo/:animeDetails' element={<AnimeInfo />} />


      </Routes>

      <Footer /> 
    </div>
  );
}

export default App;
