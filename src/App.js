import React from 'react';
import './App.css';
import Header from './components/partials/Header';

import Detail from './components/contents/Detail';
import Cart from './components/contents/Cart';
import Login from './components/contents/Login';
import Register from './components/contents/Register';
import Home from './components/contents/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
     
      {/* <Detail/> */}
      {/* <Slide/>
      <Sidebar/> */}
    </div>
    </Router>
  );
}

export default App;
