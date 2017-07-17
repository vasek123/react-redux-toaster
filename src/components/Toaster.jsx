import React from 'react';
import { connect } from 'react-redux';

import './Toaster.style.css';

import Tray from './Tray';

const Toaster = ({ toasts, toastComponent, children }) => {
  const props = { toasts, toastComponent };
  return (
    <div>
      <div className="__toaster__">
        <Tray position="top left" {...props} />
        <Tray position="top center" {...props} />
        <Tray position="top right" {...props} />
        <Tray position="bottom left" {...props} />
        <Tray position="bottom center" {...props} />
        <Tray position="bottom right" {...props} />
      </div>
      {children}
    </div>
  )
}

const mapStateToProps = state => ({
  toasts: state.toaster.toasts,
})

export default connect(mapStateToProps)(Toaster);
