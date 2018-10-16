import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../Reducers/Auth';

export default store = createStore(reducers,{},applyMiddleware(ReduxThunk))