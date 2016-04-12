import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testAC from 'redux/actions/test';
import {ComponentA, ComponentB} from 'components';
@connect(
  state => ({test: state.test}),
  dispatch=>({testBoundAC: bindActionCreators(testAC, dispatch)}))
export default class Home extends Component {
  static propTypes = {
    test: PropTypes.object,
  };
  componentDidMount() {
    // const params = {
    //   authId: 'qyzx1@test.cn',
    //   authType: 'EMAIL',
    //   password: '1bbd886460827015e5d605ed44252251',
    //   version: 'ENTERPRISE',
    // };
    // this.props.clientBoundAC.checkLogin(params);
  }

  render() {
    console.log('Home renderd', this.props.test);
    const logoImage = require('./logo.png');
    return (
      <div>
        <img src={logoImage} />
        <ComponentA {...this.props} />
        <ComponentB {...this.props} />
      </div>
    );
  }
}
