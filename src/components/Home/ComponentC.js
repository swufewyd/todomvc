import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './test.css';

@CSSModules(styles)
export default class ComponentC extends Component {

  render() {
    console.log('C renderd');
    return (
      <div styleName='box'>
        C
      </div>
    );
  }
}
