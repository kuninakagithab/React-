import { combineReducers } from 'redux';
import  count  from './Count';

export default combineReducers({ count })

// reducerが複数の場合
// export default conbineReducers({ hoge, fuga, hogaga })