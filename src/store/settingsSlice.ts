import { createSlice } from '@reduxjs/toolkit';
import { SettingsState } from '../types';

const initialState: SettingsState = {
    isSettingsOpen: false,
    fontScale: 1,
    highContrastMode: false
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleSettings: (state) => {
            state.isSettingsOpen = !state.isSettingsOpen;
        },
        setFontScale: (state, action) => {
            state.fontScale = action.payload;
        },
        toggleHighContrast: (state) => {
            state.highContrastMode = !state.highContrastMode;
        }
    }
});

export const { toggleSettings, setFontScale, toggleHighContrast } = settingsSlice.actions;
export default settingsSlice.reducer;