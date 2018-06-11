import React, { Component } from 'react'

import Author from './Author';
import ArticleBody from './ArticleBody';
import Comments from './Comments'
import Share from './Share'

class Article extends Component {
    render() {
        return (
            <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Author />
            <ArticleBody />
            <div className="article-links">
              <Comments />
              <Share />
            </div>
          </div> 
        )
    }
}

export default Article