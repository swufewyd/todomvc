import React, { Component } from 'react';
export default class Home extends Component {
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
    // console.log('this.props', this.props.client);
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div>
        <img src={logoImage} />
      </div>
    );
  }
}
