import { COUNTUP ,COUNTDOWN } from '../actions'

const initialState = { value: 0}

export default (state = initialState, action) => {
  switch(action.type){
    case COUNTUP:
      return { value: state.value + 1}
    case COUNTDOWN:
      return { value: state.value - 1}
    default:
      return state
  }
}