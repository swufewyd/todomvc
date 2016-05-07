import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoAC from 'redux/actions/todo';
import {Header, List, Footer} from 'components';


@connect(
  state => ({todo: state.todo}),
  dispatch=>({todoBoundAC: bindActionCreators(todoAC, dispatch)}))
export default class Todo extends Component {
  static propTypes = {
    todo: PropTypes.object,
    todoBoundAC: PropTypes.object,
  };

  componentDidMount() {
    this.props.todoBoundAC.getAll();
  }
  render() {
    // console.log('Home renderd', this.props.todo);
    return (
      <section className="todoapp">
        <Header {...this.props} />
        <List {...this.props} />
        <Footer {...this.props} />
      </section>
    );
  }
}
