import React from 'react';
import { connect } from 'react-redux';

import './Tray.style.css';

import Toast from './Toast';

const getClassName = props => {
  let className = '__tray__';

  if (props.position.split(' ').length > 2) {
    console.error('Toaster: Received invalid position property!');
  }

  if (props.position.includes('top')) className += ' __tray__top__';
  if (props.position.includes('bottom')) className += ' __tray__bottom__';
  if (props.position.includes('left')) className += ' __tray__left__';
  if (props.position.includes('right')) className += ' __tray__right__';
  if (props.position.includes('center')) className += ' __tray__center__';

  return className;
};

const filterToasts = (toasts, position) => {
  return toasts.filter(toast =>
    toast.position.split(' ').sort().join('').toLowerCase() === position.split(' ').sort().join('').toLowerCase()
  )
}

const Tray = (props) => {
  const { toasts, position } = props;
  const toastsToRender = filterToasts(toasts, position);

  return (
    <ul className={getClassName(props)}>
      {toastsToRender.map(toast => <Toast key={toast.id} {...toast} />)}
    </ul>
  );
}

Tray.defaultProps = {
  top: false,
  bottom: false,
  left: false,
  center: false,
  right: false,
}

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(undefined, mapDispatchToProps)(Tray);
