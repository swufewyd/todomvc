import React, { Component, PropTypes } from 'react';
import shallowEqual from 'helpers/shallowEqual';
export default class ComponentA extends Component {
  static propTypes = {
    test: PropTypes.object,
    testBoundAC: PropTypes.object,
  };
  shouldComponentUpdate(nextProps) {
    // console.log('nextProps', nextProps.test.get('A').toJS());
    // console.log('this.props', this.props.test.get('A').toJS());
    return shallowEqual(this.props.test.get('A'), nextProps.test.get('A'));
    // return !(this.props.test.get('A') === nextProps.test.get('A') || is(this.props.test.get('A'), nextProps.test.get('A')));
  }
  changeValue = ()=>{
    this.props.testBoundAC.changeValue('wyd');
  }
  render() {
    console.log('A renderd');
    return (<div>
            A:{this.props.test.getIn(['A', 'text'])}
            <button onClick={this.changeValue}>修改</button>
          </div>
    );
  }
}
