// const configureStore = require('@reduxjs/toolkit').configureStore;
import {configureStore} from '@reduxjs/toolkit';
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
// const reduxLogger = require('redux-logger');
// const cakeReducer = require('../app/features/cake/cakeSlice');
// const icecreamReducer = require('../features/icecream/icecreamSlice');
// const userReducer = require('../features/users/userSlice');
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';

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