import { Route, Routes } from 'react-router-dom';
import AnimePageInf from './Components/Sections/AnimePageInf';
import './App.css';
import Menu from './Components/Menu/Menu';
import Content from './Components/Content';
import Search from './Components/Sections/Search';
import { useEffect } from 'react';

function App() {
  const API = 'https://api.jikan.moe/v4/'

  return (
    <div className='bg-slate-800'>
      <Menu />
      <Routes >
        <Route path='my-project' element={<Content url={API}/>}/>
        <Route path='animes/:id' element={<AnimePageInf urlAPI={API}/>}/>
        <Route path='search' element={<Search urlAPI={API}/>} />
      </Routes>
    </div>
  );
}

export default App;
