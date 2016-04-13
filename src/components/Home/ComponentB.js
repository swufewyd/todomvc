import React, { Component, PropTypes } from 'react';
import shallowEqual from 'helpers/shallowEqual';
export default class ComponentB extends Component {
  static propTypes = {
    test: PropTypes.object,
    testBoundAC: PropTypes.object,
  };
  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps', nextProps);
  // }
  shouldComponentUpdate(nextProps) {
    // console.log('nextProps', nextProps.test.get('B'));
    // console.log('this.props', this.props.test.get('B'));
    return shallowEqual(this.props.test.get('B'), nextProps.test.get('B'));
    // return !(this.props.test.get('B') === nextProps.test.get('B') || is(this.props.test.get('B'), nextProps.test.get('B')));
  }
  handleInputChange = (evt)=> {
    this.props.testBoundAC.setInput(evt.target.value);
  }
  render() {
    console.log('B renderd', this.props);
    return (<div>
            {this.props.test.getIn(['B', 'text'])}
            <input onChange={this.handleInputChange} value={this.props.test.getIn(['B', 'text'])} />
          </div>
    );
  }
}
