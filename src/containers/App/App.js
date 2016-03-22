import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAC from '../../redux/actions/client';
@connect(
  state => ({client: state.client}),
  dispatch=>({clientBoundAC: bindActionCreators(clientAC, dispatch)}))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    client: PropTypes.object,
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
