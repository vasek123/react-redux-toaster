import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeToast } from '../actions';

import './Toast.style.css';

class Toast extends Component {
  constructor(props) {
    super(props);

    this.dismiss = this.dismiss.bind(this);
  }

  componentDidMount() {
    const duration = parseInt(this.props.duration);
    if (!isNaN(duration)) {
      this.timeout = setTimeout(() => {
        if (this.props.handleTimeout !== undefined) this.props.handleTimeout(this.props);
        this.props.removeToast();
      }, duration);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  dismiss() {
    if (this.props.handleDismiss !== undefined) this.props.handleDismiss(this.props);
    this.props.removeToast();
  }

  render() {
    return (
      <li className="__toast__">
        <span>{this.props.text}</span>
        {this.props.dismiss && <button onClick={this.dismiss} style={{ float: 'right' }}>Dismiss</button>}
      </li>
    )
  }
}

Toast.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,

  // Should the dismiss button be displayed
  dissmiss: PropTypes.bool,

  // How long should the toast be displayed
  // duration: PropTypes.oneOf([PropTypes.number, PropTypes.string]),

  // Passed functions
  // dismissHandler: PropTypes.func.isRequired,
}

Toast.defaultProps = {
  dismiss: true,
}

export default Toast;
