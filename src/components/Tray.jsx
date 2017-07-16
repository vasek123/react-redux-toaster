import React from 'react';

import './Tray.style.css';

import Toast from './Toast';

const getClassName = props => {
  let className = '__tray__';

  if (props.top) className += ' __tray__top__';
  if (props.bottom) className += ' __tray__bottom__';
  if (props.left) className += ' __tray__left__';
  if (props.right) className += ' __tray__right__';
  if (props.center) className += ' __tray__center__';

  return className;
};

const filterToasts = (toasts, position) => {
  return toasts.filter(toast => {
    let shouldBeRendered = true;
    Object.keys(position).map(pos => {
      if (position[pos] && !toast[pos]) shouldBeRendered = false;
    })
    return shouldBeRendered;
  })
}

const Tray = (props) => {
  const { toasts, top, bottom, left, center, right } = props;
  const position = { top, bottom, left, center, right };
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

export default Tray;
