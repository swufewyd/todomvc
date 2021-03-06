import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
