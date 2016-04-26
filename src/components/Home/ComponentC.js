import React, { Component } from 'react';
import cSSModules from 'react-css-modules';
import styles from './test.less';

@cSSModules(styles)
export default class ComponentC extends Component {

  render() {
    console.log('C renderd');
    return (
      <div styleName="empty">
        C
      </div>
    );
  }
}
