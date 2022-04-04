import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About'
import Dasboard from './component/Dasboard/Dasboard';
import Reviews from './component/Reviews/Reviews';
import Block from './component/Block/Block';
import Header from './component/Header/Header';
import Notfound from './component/Notfound/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/dashboard' element={<Dasboard></Dasboard>}></Route>
     <Route path='/reviews' element={<Reviews></Reviews>}></Route>
     <Route path='/block' element={<Block></Block>}></Route>
     <Route path='*' element={<Notfound></Notfound>}></Route>
   </Routes>
   
   
    </div>
  );
}

export default App;
