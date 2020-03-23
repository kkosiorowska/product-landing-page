import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './containers/Layout/Layout';

function App() {
  return ( 
    <div id="page-wrapper">
      <Header/>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;