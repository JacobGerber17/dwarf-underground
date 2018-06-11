import React, { Component } from 'react'

import CommentForm from './CommentForm'

class Comments extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleComment() {
        this.setState({
            isHidden: !this.state.isHidden
          })
    }

    render() {
        return (
            <div>
                <a className="article-link">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text"
                          onClick={() => this.toggleComment()}>Comments</span><br />
                </a>
                {!this.state.isHidden && <CommentForm />}
            </div>
        )
    }
}

export default Comments