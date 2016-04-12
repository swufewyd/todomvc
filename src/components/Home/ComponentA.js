import React, { Component, PropTypes } from 'react';
export default class ComponentA extends Component {
  static propTypes = {
    test: PropTypes.object,
    testBoundAC: PropTypes.object,
  };
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
