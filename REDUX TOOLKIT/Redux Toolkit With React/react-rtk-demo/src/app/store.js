// const configureStore = require('@reduxjs/toolkit').configureStore;
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/users/userSlice';
import {configureStore} from '@reduxjs/toolkit';
const { getDefaultMiddleware } = require('@reduxjs/toolkit');

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store