import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavigationBar';
import ControlledCarousel from './components/ControlledCarousel';
import Footer from './components/Footer';
import FormPage from './components/FormPage';
import Links from './components/Links';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ControlledCarousel />
    <br>
    </br>
    <br>
    </br>
    <FormPage />
    <Footer />
    </div>
  );
}

export default App;
