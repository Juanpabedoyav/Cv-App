import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    
})

export const store = createStore(
   reducers,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
