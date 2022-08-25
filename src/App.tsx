import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import './Stylings/app.css';

function App() {
  return (
    <div className="App">
      <header id="navbar">
        <Header />
      </header>
      <div id="home">
        <Home />
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
