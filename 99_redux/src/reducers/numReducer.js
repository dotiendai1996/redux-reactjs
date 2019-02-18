const numInitialState = ['man hinh','chuot','ban phim'];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state,action.newItem];
        default:
            return state
    }
}

export default numReducer;