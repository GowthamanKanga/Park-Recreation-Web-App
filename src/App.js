import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Facilities from './components/Facilities';
import Bookings from './components/Bookings';
import Events from './components/Events';
import Maps from './components/Maps';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

document.body.style.backgroundColor = "#f5f7f8";
// document.body.style.margin = "0";
// document.body.style.padding = "0";
// document.body.style.height = "100%";
// document.html.style.height = "100%";
// document.body.style.overflow = "auto";
// document.body.style.paddingBottom = "80px";

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Main' element={<Main/>}/>
          <Route path='/Facilities' element={<Facilities/>}/>
          <Route path='/Bookings' element={<Bookings/>}/>
          <Route path='/Events' element={<Events/>}/>
          <Route path='/Maps' element={<Maps/>}/>
          <Route path='/Chat' element={<Chat/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
