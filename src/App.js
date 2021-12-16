import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../src/Views/Login/login';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

import Sidebar from '../src/Views/Sidebar/sidebar';
import ViewBugs from './Views/Pages/viewBugs';


function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> : 
        <>
          <Sidebar />
          <Switch>
            <Route path="/viewbugs"><ViewBugs /></Route>
          </Switch>
          
        </>
      }
    </Router>
  );
}

export default App;
