import React from 'react';
import { connect } from 'react-redux';

import Toast from './Toast';

const Toaster = ({ toasts, children }) => {
  return (
    <div className="__toaster__">
      <ul className="__toasts__">
        {toasts.map(toast => <Toast key={toast.id} {...toast} />)}
      </ul>
      {children}
    </div>
  )
}

const mapStateToProps = state => ({
  toasts: state.toaster.toasts,
})

export default connect(mapStateToProps)(Toaster);
