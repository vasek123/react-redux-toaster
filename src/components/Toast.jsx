import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Toast.style.css';

class Toast extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { duration } = this.props;
    if (duration !== undefined) {
      this.timeout = setTimeout(this.props.handleTimeout, duration);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <li className="__toast__">
        {this.props.text}
      </li>
    )
  }
}

Toast.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,

  // How long should the toast be displayed
  // dissmiss: PropTypes.bool.isRequired,
  duration: PropTypes.number,

  // Passed functions
  // dismissHandler: PropTypes.func.isRequired,
}

export default Toast;
