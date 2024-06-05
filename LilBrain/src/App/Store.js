import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from '../features/Score/Scoreslice';

export const store = configureStore({
    reducer: {
        score: scoreReducer,
    },
});
