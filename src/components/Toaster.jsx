import React from 'react';
import { connect } from 'react-redux';

import './Toaster.style.css';

import Tray from './Tray';

const Toaster = ({ toasts, children }) => {
  return (
    <div>
      <div className="__toaster__">
        <Tray top left toasts={toasts} />
        <Tray top center toasts={toasts} />
        <Tray top right toasts={toasts} />
        <Tray bottom left toasts={toasts} />
        <Tray bottom center toasts={toasts} />
        <Tray bottom right toasts={toasts} />
      </div>
      {children}
    </div>
  )
}

const mapStateToProps = state => ({
  toasts: state.toaster.toasts,
})

export default connect(mapStateToProps)(Toaster);
