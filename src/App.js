import React from 'react';
import './App.css';
import Header from './components/partials/Header';
import Detail from './components/contents/Detail';
import Cart from './components/contents/Cart';
import Login from './components/contents/Login';
import Register from './components/contents/Register';
import Home from './components/contents/Home';
import Payment from './components/contents/Payment';
import Footer from './components/partials/Footer';
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
          <Route exact path="/login">
            <Login  />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail/:id">
              <Detail />
          </Route>

        </Switch>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
