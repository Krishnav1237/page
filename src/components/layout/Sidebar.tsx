import React from 'react';

const Sidebar = React.memo(() => {
    return (
        <div className="fixed left-0 top-14 bottom-0 w-14 bg-white shadow-sm flex flex-col items-center py-4">
            <button className="p-2 hover:bg-gray-100 rounded-full mb-2">
                <span className="font-medium">目</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="text-blue-500">℗</span>
            </button>
        </div>
    );
});

Sidebar.displayName = 'Sidebar';
export default Sidebar;