import React, { Component } from 'react'

import Clickbait from './Clickbait'

class OtherArticles extends Component {
  constructor() {
    super()
    this.state = {
      articles: [{
        source: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
        title: "Single Orcs in Indianapolis"
      },{
          source : "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
          title : "You won't believe what's under this mountain"
        },{
          source : "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
          title : "Mine 20% more gold with One Weird Trick"
        },{
          source : "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
          title : "Surprise for Indiana Hobbits born before 1999"
        }

      ]
    }
  }

  render() {
    return (
      <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>

        {this.state.articles.map((article) => {
          return <Clickbait source={article.source}
                     title={article.title} />
        })}
      </div>
    )
  }
}

export default OtherArticles