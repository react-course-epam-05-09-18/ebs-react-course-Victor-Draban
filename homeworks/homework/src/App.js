import React, { Component } from 'react';
import Route from "./router/Router";

//components
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";

//styles
import './App.css';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Header />
        <Route />
        <Footer />
      </div>
    );
  }
}


export default App;
