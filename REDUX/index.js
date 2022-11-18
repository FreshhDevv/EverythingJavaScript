const redux = require('redux');
// For React Applications
// import redux from 'redux';

const createStore = redux.createStore

// The Action
const CAKE_ORDERED = 'CAKE_ORDERED';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
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

    unsubscribe();