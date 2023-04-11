import { configureStore } from '@reduxjs/toolkit';
// import gameXucXacReducer from './reducers/GameXucXacReducer'
import moviesReducer from './reducers/moviesreducer';

const store = configureStore({ 
    reducer : {
        // gameXucXacReducer,
        moviesReducer,
    }
});

export default store;