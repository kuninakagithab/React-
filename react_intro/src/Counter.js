import React, {Component} from 'react';

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }
  countUp = () => {
    this.setState({count: this.state.count + 1})
  }
  render(){
  return (
    <React.Fragment>
  <div>counter: {this.state.count}</div>
  <button onClick={this.countUp}>+1</button>
  </React.Fragment>
  )
  }
}

export default Counter;