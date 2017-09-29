import React, { Component, PropTypes } from 'react';
import store from './store';
import Page from './containers/page';

// This entry point also acts as our provider
class App extends Component {
  getChildContext() {
    return { store };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Page />
      </div>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object
};

export default App;
