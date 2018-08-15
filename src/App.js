import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import { Panel } from 'react-bootstrap';

import PostsTapeView from './posts/views/PostsTapeView';

import './styles/styles.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main-content-panel col-sm-8 col-sm-offset-2">
          <Panel>
            <Panel.Body><PostsTapeView /></Panel.Body>
          </Panel>
        </div>
      </Provider>
    );
  }
}

export default App;
