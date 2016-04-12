import React, { Component, PropTypes } from 'react';
import {is} from 'immutable';

export default class ComponentB extends Component {
  static propTypes = {
    test: PropTypes.object,
  };
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps) {
    console.log('nextProps', nextProps.test.get('B'));
    console.log('this.props', this.props.test.get('B'));
    return !(this.props.test.get('B') === nextProps.test.get('B') || is(this.props.test.get('B'), nextProps.test.get('B')));
  }
  render() {
    console.log('B renderd', this.props);
    return (<div>
            {this.props.test.getIn(['B', 'text'])}
          </div>
    );
  }
}
