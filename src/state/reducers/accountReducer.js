// N1 
const reducer = (state = 0, action) => {
    switch(action.type){
        case "deposit":
            return state + action.payload
        case 'withdraw':
            return state - action.payload
        default:
            return state
    }
}

// Well and our next step is to combine all of our reducers 

// So remember that we could have multiple reducers like accoutReducer | userReducer ...
export default reducer;