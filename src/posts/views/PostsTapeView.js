import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ApiStatuses } from '../../constants/ApiStatuses';
import { getPostsRequest } from '../../http';
import { fetchPosts } from '../../redux/actions/apiActions';

import PostsList from '../components/PostsList';

class PostsView extends Component {

  componentDidMount() {
    if ( this.props.postsRequestStatus === ApiStatuses.IDLE) {
      this.props.retrievePosts();
    }
  }

  render() {
    const showSpinner = this.props.postsRequestStatus === ApiStatuses.LOADING;
    const showPosts = this.props.postsRequestStatus === ApiStatuses.COMPLETED;
    return (
        <div id='posts-tape-view'>
        {
          showSpinner &&
          <p>This is spinner...</p>
        }
        { showPosts &&
          <PostsList posts={this.props.posts}/>
        }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postsRequestStatus: state.api.posts.status,
    posts: Object.values(state.posts),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      retrievePosts: () => {
        dispatch(fetchPosts(getPostsRequest));
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsView);
