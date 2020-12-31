import React, { Component } from 'react';

const requireAuth = ChildComponent => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />;
    }
  }

  return ComposedComponent;
};

export default requireAuth;
