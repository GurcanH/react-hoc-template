import React, { Component } from 'react';
import { connect } from 'react-redux';
const requireAuth = ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        console.log('I NEED TO LEAVE!!!');
      }
    }

    render() {
      return <ChildComponent />;
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
