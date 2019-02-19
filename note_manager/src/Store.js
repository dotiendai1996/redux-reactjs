import {firebaseConnect} from './firebaseConnect';

var redux = require('redux');


const noteInitialState = {
    isEdit : false,
    editItem : {},
    isAdd : false,
    isAlert: false,
    alertMessage : '',
    alertType : ''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
        firebaseConnect.push(action.getItem)
        console.log('them data thanh cong ' + JSON.stringify(action.getItem));
            return state

            case "CHANGE_EDIT_STATUS":
                return {...state,isEdit: !state.isEdit}

            case "GET_DATA":
                return {...state, editItem: action.editObj}
            case "EDIT":
                firebaseConnect.child(action.newItem.id).update({
                    noteTitle : action.newItem.noteTitle,
                    noteContent : action.newItem.noteContent
                })
                console.log("update "+ JSON.stringify(action.newItem) );
                return state
            case "DELETE": 
                firebaseConnect.child(action.idNoteDel).remove();
                console.log("delete thanh cong" + action.idNoteDel);
                return state
            case "CHECK_IS_ADD":
                return {...state, isAdd:!state.isAdd}
            case "ALERT_ON":
                return {...state, isAlert:true, alertMessage: action.alertContent, alertType: action.alertColor}
            case "ALERT_OFF":
                return {...state, isAlert:false}
        default:
            return state
    }
}

var store = redux.createStore(allReducer);
store.subscribe(function(){
   // console.log(JSON.stringify(store.getState()));
})
export default store;