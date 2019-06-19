import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavigationBar';
import ControlledCarousel from './components/ControlledCarousel';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ControlledCarousel />
    </div>
  );
}

export default App;
