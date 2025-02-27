import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitQuiz } from '../../store/quizSlice';
import { RootState } from '../../store';

const SubmitButton = React.memo(() => {
    const dispatch = useDispatch();
    const { questions, answers } = useSelector((state: RootState) => state.quiz);

    const handleSubmit = () => {
        const unansweredCount = questions.length - Object.keys(answers).length;
        if (unansweredCount > 0) {
            if (confirm(`You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`)) {
                dispatch(submitQuiz());
                alert('Test submitted successfully!');
            }
        } else {
            dispatch(submitQuiz());
            alert('Test submitted successfully!');
        }
    };

    return (
        <button
            onClick={handleSubmit}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
            Submit Test
        </button>
    );
});

SubmitButton.displayName = 'SubmitButton';
export default SubmitButton;