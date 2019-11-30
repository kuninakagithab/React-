import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { countUp, countDown } from './actions'

class App extends Component {
  render(){
    const props = this.props
    return(
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.countUp}>+1</button>
        <button onClick={props.countDown}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>({value: state.count.value})

const mapDispatchToProps = dispatch => ({
  countUp: () => dispatch(countUp()),
  countDown: () => dispatch(countDown())
})

export default connect (mapStateToProps,mapDispatchToProps)(App);