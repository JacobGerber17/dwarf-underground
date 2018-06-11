import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import OtherArticles from './OtherArticles';
import Article from './Article';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <Sidebar />
          <OtherArticles />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
