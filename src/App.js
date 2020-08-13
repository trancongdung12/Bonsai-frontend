import React from 'react';
import './App.css';
import Header from './components/partials/Header';
import Slide from './components/partials/Slide';
import Sidebar from './components/partials/Sidebar';
import Detail from './components/contents/Detail';
import Cart from './components/contents/Cart';
import Register from './components/contents/Register';
function App() {
  return (
    <div className="App">
      <Header/>
      <Register />
      {/* <Detail/> */}
      {/* <Slide/>
      <Sidebar/> */}
    </div>
  );
}

export default App;
