import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductsContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
