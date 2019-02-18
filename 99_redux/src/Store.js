import editStatusReducer from './reducers/editStatusReducer';
import numReducer from './reducers/numReducer';
var redux = require('redux');
// var oldState = {
//     num : ['man hinh','chuot','ban phim'],
//     editStatus : true   
// }


// var reducer1 = (state=oldState, action) => {
//     switch (action.type) {
//         case "CHANGE_EDIT_STATUS": 
//             return {...state, editStatus : !state.editStatus}
//         case "ADD_NEW":
//             return {...state, num : [...state.num,action.newItem]}
//         default : 
//             return state;
//     }
// }

// const numInitialState = ['man hinh','chuot','ban phim'];
// const numReducer = (state = numInitialState, action) => {
//     switch (action.type) {
//         case "ADD_NEW":
//             return [...state,action.newItem];
//         default:
//             return state
//     }
// }

// const editStatusInitialState = true;
// const editStatusReducer = (state = editStatusInitialState, action) => {
//     switch (action.type) {
//         case "CHANGE_EDIT_STATUS":
//             return !state;
//         default:
//             return state
//     }
// }

const allReducers = redux.combineReducers({
    num:numReducer,
    editStatus:editStatusReducer
})

var store1 = redux.createStore(allReducers);
store1.subscribe(()=>{
    console.log(JSON.stringify(store1.getState()));
})

store1.dispatch({type:"CHANGE_EDIT_STATUS"});
store1.dispatch({
    type: "ADD_NEW",
    newItem : "tai phone"
});

export default store1;