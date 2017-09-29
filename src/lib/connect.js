import React from 'react';
import { bindActionCreators } from 'redux'

const connect = (mapState, actionCreators = {}) => (Component) => {
  class ConnectedComponent extends React.Component {
    componentDidMount() {
      this.unsubscribe = this.context.store.subscribe(this.handleChange.bind(this));
    }

    // Unsubscribe so we don't get memory leaks
    componentWillUnmount() {
      this.unsubscribe();
    }

    // Whenever the store state changes, it re-renders. Is this optimal?
    handleChange() {
      this.forceUpdate();
    }

    render() {
      const { context, props } = this;

      // Allow us to 'call' actions that will dispatch an event.
      const actions = bindActionCreators(actionCreators, context.store.dispatch);

      // Pass in only the state we need to prevent unneccessary re-rendering
      const stateProps = mapState(context.store.getState());

      return <Component {...props} {...stateProps} actions={actions} />;
    }
  }

  ConnectedComponent.contextTypes = { store: React.PropTypes.object };

  return ConnectedComponent;
};

export default connect;
