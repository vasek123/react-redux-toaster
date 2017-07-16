import React from 'react';
import { connect } from 'react-redux';

import './Toaster.style.css';

import Tray from './Tray';

const Toaster = ({ toasts, children }) => {
  return (
    <div>
      <div className="__toaster__">
        <Tray position="top left" toasts={toasts} />
        <Tray position="top center" toasts={toasts} />
        <Tray position="top right" toasts={toasts} />
        <Tray position="bottom left" toasts={toasts} />
        <Tray position="bottom center" toasts={toasts} />
        <Tray position="bottom right" toasts={toasts} />
      </div>
      {children}
    </div>
  )
}

const mapStateToProps = state => ({
  toasts: state.toaster.toasts,
})

export default connect(mapStateToProps)(Toaster);
