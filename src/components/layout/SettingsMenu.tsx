import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFontScale, toggleHighContrast } from '../../store/settingsSlice';
import { RootState } from '../../store';

const SettingsMenu = React.memo(() => {
    const dispatch = useDispatch();
    const { fontScale, highContrastMode } = useSelector((state: RootState) => state.settings);

    return (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile Settings
            </button>
            <div className="px-4 py-2">
                <label className="block text-sm text-gray-700">Font Size</label>
                <select
                    value={fontScale}
                    onChange={(e) => dispatch(setFontScale(parseFloat(e.target.value)))}
                    className="mt-1 block w-full text-sm"
                >
                    <option value={0.8}>Small</option>
                    <option value={1}>Medium</option>
                    <option value={1.2}>Large</option>
                </select>
            </div>
            <div className="px-4 py-2 flex items-center">
                <input
                    type="checkbox"
                    checked={highContrastMode}
                    onChange={() => dispatch(toggleHighContrast())}
                    className="mr-2"
                />
                <span className="text-sm text-gray-700">High Contrast</span>
            </div>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
            </button>
        </div>
    );
});

SettingsMenu.displayName = 'SettingsMenu';
export default SettingsMenu;