import React from 'react';
import EventList from './pages/EventList';
import FacilityList from './pages/FacilityList';
import Home from './pages/Home';
import ParkList from './pages/ParkList';
import ParkMap from './pages/ParkMap';
import BookingPage from './pages/BookingPage'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import SettingPage from './pages/SettingPage'
import ChatForum from './pages/ChatForum';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";




function App() {
  return (
    <>
      <ChatForum/>
    </>
  );
}

export default App;


{/* <Router>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/ParkList' element={<ParkList/>}/>
  <Route path='/EventList' element={<EventList/>}/>
  <Route path='/FacilityList' element={<FacilityList/>}/>
  <Route path='/ParkMap' element={<ParkMap/>}/>
  <Route path='/ParkMap' element={<ParkMap/>}/>
  <Route path='/BookingPage' element={<BookingPage/>}/>
</Routes>
</Router> */}