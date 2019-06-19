import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavigationBar';
import ControlledCarousel from './components/ControlledCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ControlledCarousel />
    <Footer />
    </div>
  );
}

export default App;
