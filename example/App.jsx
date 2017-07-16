import React from 'react';
import { connect } from 'react-redux';
import { addToast, removeLastToast } from 'react-redux-toaster';

const App = ({ lastId, addToast, removeLastToast }) => {
  return (
    <div className="app">
      <button onClick={() => addToast(lastId + 1)}>Add toast</button>
      <button onClick={() => removeLastToast(lastId)}>Remove last toast</button>
    </div>
  )
}

const mapStateToProps = state => ({
  lastId: state.toaster.lastId
})

const mapDispatchToProps = dispatch => ({
  addToast: (id) => dispatch(addToast({ text: `Toast #${id}`, right: true, bottom: true })),
  removeLastToast: (id) => dispatch(removeLastToast()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
