import React from 'react';
import './App.css';
import Header from './components/partials/Header';
import Slide from './components/partials/Slide';
import Sidebar from './components/partials/Sidebar';
function App() {
  return (
    <div className="App">
      <Header/>
      <Slide/>
      <Sidebar/>
    </div>
  );
}

export default App;
