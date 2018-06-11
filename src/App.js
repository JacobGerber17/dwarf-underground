import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Comments from './Comments'
import Share from './Share'
import ArticleBody from './ArticleBody';
import OtherArticles from './OtherArticles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <div className="avatar">
              <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
              <div className="author-info">
                <p className="author-name">By Domri, son of Flug</p>
                <p className="date">on 28 April, 3018 of the Third Age</p>
              </div>
            </div>
            <ArticleBody />
            <div className="article-links">
              <Comments />
              <Share />
            </div>
          </div>
          <Sidebar />

          <OtherArticles />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
