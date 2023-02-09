<<<<<<< HEAD
import React from "react";
import EventList from "./pages/EventList";
import FacilityList from "./pages/FacilityList";
import Home from "./pages/Home";
import ParkList from "./pages/ParkList";
import ParkMap from "./pages/ParkMap";
import BookingPage from "./pages/BookingPage";
import ChatForum from "./pages/ChatForum";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ParkList" element={<ParkList />} />
          <Route path="/EventList" element={<EventList />} />
          <Route path="/FacilityList" element={<FacilityList />} />
          <Route path="/ParkMap" element={<ParkMap />} />
          <Route path="/ParkMap" element={<ChatForum />} />
          <Route path="/BookingPage" element={<BookingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

=======
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
      <EventList/>
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
>>>>>>> 8e3b6132d0cfdf7b5d90401b0abb37c4fe061036
