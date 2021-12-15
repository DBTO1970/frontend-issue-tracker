import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../src/Views/Login/login';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Views/Sidebar/Sidebar';
import ViewBugs from './Views/Pages/viewBug';


function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> : 
        <>
          <Sidebar />
          <ViewBugs />
        </>
      }
    </Router>
  );
}

export default App;
