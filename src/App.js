import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import Content from './content/Content'
import Header from './content/components/Header'
import Footer from './content/components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
