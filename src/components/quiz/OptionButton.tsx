import React from 'react';

interface OptionButtonProps {
    label: string;
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

const OptionButton = React.memo(({ label, text, isSelected, onClick }: OptionButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left p-3 border rounded transition ${
                isSelected ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
            }`}
        >
            <span className="mr-3">{label}</span>
            {text}
        </button>
    );
});

OptionButton.displayName = 'OptionButton';
export default OptionButton;