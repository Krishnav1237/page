import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuestion } from '../../store/quizSlice';
import { RootState } from '../../store';

const NavigationButtons = React.memo(() => {
    const dispatch = useDispatch();
    const { currentQuestionIndex, questions } = useSelector((state: RootState) => state.quiz);

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            dispatch(setCurrentQuestion(currentQuestionIndex - 1));
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            dispatch(setCurrentQuestion(currentQuestionIndex + 1));
        }
    };

    return (
        <div className="flex justify-between">
            <button
                onClick={handlePrevious}
                className={`flex items-center gap-2 px-4 py-2 border rounded ${
                    currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                }`}
                disabled={currentQuestionIndex === 0}
            >
                <ChevronLeft size={16} />
                Previous
            </button>
            <button
                onClick={handleNext}
                className={`flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded ${
                    currentQuestionIndex === questions.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
                }`}
                disabled={currentQuestionIndex === questions.length - 1}
            >
                Next
                <ChevronRight size={16} />
            </button>
        </div>
    );
});

NavigationButtons.displayName = 'NavigationButtons';
export default NavigationButtons;