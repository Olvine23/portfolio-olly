/* eslint-disable default-case */
const counterReducer = (state = 6, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
            
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
        case 'CLEAR':
            return state = 0;
        case 'FIVE':
            return state + 5;

    }

}
export default counterReducer;