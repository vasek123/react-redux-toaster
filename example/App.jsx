import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { addToast, removeLastToast } from 'react-redux-toaster';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 'top',
      width: 'right',
      duration: undefined,
    }

    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }
  
  handleHeightChange(e) {
    console.log(e.target.value);
    this.setState({ height: e.target.value });
  }

  handleWidthChange(e) {
    console.log(e.target.value);
    this.setState({ width: e.target.value });
  }

  handleNumberChange(e) {
    console.log(e.target.value);
    this.setState({ number: e.target.value });
  }

  render() {
    return (
      <div className="app">

        <button onClick={() => this.props.addToast(this.state.width, this.state.height, this.state.number, this.props.lastId + 1)}>Add toast</button>
        <button onClick={() => this.props.removeLastToast(this.props.lastId)}>Remove last toast</button>

        <select onChange={this.handleHeightChange}>
          <option>top</option>
          <option>bottom</option>
        </select>

        <select onChange={this.handleWidthChange}>
          <option>right</option>
          <option>left</option>
        </select>

        <input type='number' onChange={this.handleNumberChange} />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  lastId: state.toaster.lastId
})

const mapDispatchToProps = dispatch => ({
  addToast: (width, height, duration, id) => dispatch(addToast({
    text: `Toast #${id}`,
    position: `${width} ${height}`,
    duration: parseInt(duration) > 0 ? duration : undefined,
  })),
  removeLastToast: (id) => dispatch(removeLastToast()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
