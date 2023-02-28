import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import AllUsers from './views/AllUsers'
// import Cookie from './views/Cookie'
import Register from './views/Register'
import Login from './views/Login'
import LogOut from './views/LogOut'
import UserInfo from './views/UserInfo'
import Error from './views/Error'
import Test from './views/Test'

function App() {
  return (
    <div>
      <p>
        <Link to="/logout"> Log Out</Link>
        <Link to="/test"> Test</Link>
        {/* <Link to="/cookie"> Cookie</Link> */}
        {/* <Link to="/allUsers"> All Users</Link> */}
      </p>
      <Routes>
        {/* <Route path="/allUsers" element={<AllUsers />} /> */}
        {/* <Route path="/cookie" element={<Cookie />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/getUser" element={<UserInfo />} />
        <Route path="*" element={<Error />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
