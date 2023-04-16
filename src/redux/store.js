import {createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from'redux-devtools-extension';
import thunk from 'redux-thunk'
import { todosReducers } from './reducer/todosReducer';
import { tabReducer } from './reducer/tabReducers';


const middleware = [thunk];

const reducer = combineReducers({
    todos:todosReducers,
    currentTab:tabReducer
})

const store = createStore (
    reducer,
 composeWithDevTools(applyMiddleware(...middleware))

)

export default store;