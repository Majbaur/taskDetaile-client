import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Calender from './Components/Calender/Calender';
import AddProduct from './Components/AddProducts/AddProduct';
import MyItems from './Components/MyItems/MyItems';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Home></Home> */}
      <Routes>

         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='/addItem' element={<AddProduct></AddProduct>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        </Routes>
    </div>
  );
}

export default App;