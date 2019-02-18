import {firebaseConnect} from './firebaseConnect';

var redux = require('redux');


const noteInitialState = {
    testConnect : true
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
        firebaseConnect.push(action.getItem)
        console.log('them data thanh cong ' + JSON.stringify(action.getItem));
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;