import { Route, Routes } from 'react-router-dom';
import Synospsis from './Components/Sections/Synopsis';
import './App.css';
import Menu from './Components/Menu/Menu';
import Content from './Components/Content';
import Search from './Components/Sections/Search';

function App() {
  const API = 'https://api.jikan.moe/v4/'


  return (
    <div className='bg-slate-900'>
      <Menu />
      <Routes >
        <Route path='' element={<Content url={API}/>}/>
        <Route path='/animes/:id' element={<Synospsis urlAPI={API}/>}/>
        <Route path='/search' element={<Search urlAPI={API}/>} />
        <Route path='/search/animes/:id' element={<Synospsis urlAPI={API}/>} />
      </Routes>
    </div>
  );
}

export default App;
