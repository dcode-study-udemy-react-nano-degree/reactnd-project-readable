import React, {Component} from "react";
import BodyPost from "./post/BodyPost";
import CommentsSectionComponent from "./post/CommentsSection";
import * as Api from '../Api';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: (arr) => arr,
            dispatch: props.dispatch
        };
    }

    onDeleteClick(modal,id) {
        switch(modal){
            case "post":
                Api.deletePost(this.state.dispatch,id);
                break;
            case "comment":
                alert('onDeleteClick comment')
                // Api.deleteComment(this.state.dispatch,id);
                break;
            default:
                console.log(`Error no such modal ${modal}`)
        }
    }

    onUpvoteClick(modal,id) {
        switch(modal){
            case "post":
                Api.votePost(this.state.dispatch,id,'upVote');
                break;
            case "comment":
                alert('onUpvoteClick comment')
                // Api.voteComment(this.state.dispatch,id);
                break;
            default:
                console.log(`Error no such modal ${modal}`)
        }

    }

    onDownvoteClick(modal,id) {
        switch(modal){
            case "post":
                Api.votePost(this.state.dispatch,id,'downVote');
                break;
            case "comment":
                alert('onDownvoteClick comment')
                // console.log(`downVote not implemented for ${modal}`)
                break;
            default:
                console.log(`Error no such modal ${modal}`)
        }

    }

    sortBy = (foo) => {
        this.setState({sort: foo})
    };

    render() {
        let {post, comments, location} = this.props;
        const commentsAnchor = 'commentsHeaderId';

        if (undefined === post) {
            return (<div>Loading</div>)
        }

        return (
            <div className="post-component">
                <BodyPost post={post}
                          commentsLength={comments.length}
                          commentsAnchor={commentsAnchor}
                          location={location}
                          onDeleteClick={this.onDeleteClick.bind(this,'post')}
                          onUpvoteClick={this.onUpvoteClick.bind(this,'post')}
                          onDownvoteClick={this.onDownvoteClick.bind(this,'post')}
                />
                <CommentsSectionComponent
                    comments={comments}
                    commentsAnchor={commentsAnchor}
                    location={location}
                    onDeleteClick={this.onDeleteClick.bind(this,'comment')}
                    onUpvoteClick={this.onUpvoteClick.bind(this,'comment')}
                    onDownvoteClick={this.onDownvoteClick.bind(this,'comment')}
                />
            </div>
        )
    }
}

export default Posts;
