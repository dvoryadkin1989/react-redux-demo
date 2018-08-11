import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import { Panel } from 'react-bootstrap';
import {fetchPosts} from './redux/actions/postsActions';
import {fetchUsers} from './redux/actions/usersActions';

import './styles/styles.css'

class App extends Component {
  render() {
    store.dispatch(fetchPosts());
    store.dispatch(fetchUsers());
    return (
      <Provider store={store}>
        <div className="col-sm-8 col-sm-offset-2">
          <Panel>
            <Panel.Body><p>Content goes here</p></Panel.Body>
          </Panel>
        </div>
      </Provider>
    );
  }
}

export default App;
