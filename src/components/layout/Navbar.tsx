import React from 'react';
import { Volume2, Settings, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSettings } from '../../store/settingsSlice';
import { RootState } from '../../store';
import SettingsMenu from './SettingsMenu';

const Navbar = React.memo(() => {
    const dispatch = useDispatch();
    const { isSettingsOpen } = useSelector((state: RootState) => state.settings);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-full px-4 flex justify-between items-center h-14">
                <div className="flex items-center gap-4">
                    <div className="text-xl font-bold">VR</div>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Volume2 size={20} />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => dispatch(toggleSettings())}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        <Settings size={20} />
                    </button>

                    <div className="flex items-center gap-2 relative">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <User size={20} />
                        </div>
                        {isSettingsOpen && <SettingsMenu />}
                    </div>
                </div>
            </div>
        </nav>
    );
});

Navbar.displayName = 'Navbar';
export default Navbar;