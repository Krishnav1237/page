import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';
import timerReducer from './timerSlice';
import settingsReducer from './settingsSlice';

export const store = configureStore({
    reducer: {
        quiz: quizReducer,
        timer: timerReducer,
        settings: settingsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;