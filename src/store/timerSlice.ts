import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimerState } from '../types';

const initialState: TimerState = {
    timeRemaining: 25 * 60, // 25 minutes in seconds
    isPaused: false
};

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        decrementTimer: (state) => {
            if (!state.isPaused && state.timeRemaining > 0) {
                state.timeRemaining -= 1;
            }
        },
        togglePause: (state) => {
            state.isPaused = !state.isPaused;
        },
        resetTimer: (state, action: PayloadAction<number>) => {
            state.timeRemaining = action.payload;
            state.isPaused = false;
        }
    }
});

export const { decrementTimer, togglePause, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;