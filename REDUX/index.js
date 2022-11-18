const redux = require('redux');
// For React Applications
// import redux from 'redux';

const createStore = redux.createStore

// The Action Type
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';


// The Action Creator

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}
// The State
const initialState = {

    numberOfCakes: 10,
}

    // (previousState, action) => newState

    // The Reducer
    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case CAKE_ORDERED:
                return {
                    ...state,
                    numberOfCakes: state.numberOfCakes - 1,
                } 
                case CAKE_RESTOCKED: 
                return {
                    ...state,
                    numberOfCakes: state.numberOfCakes + action.payload,
                }
                default:
                    return state
        }
    }

    const store = createStore(reducer);
    console.log('Initial State', store.getState());
    const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

    store.dispatch(orderCake());
    store.dispatch(orderCake());
    store.dispatch(orderCake());

    store.dispatch(restockCake(3));

    unsubscribe();