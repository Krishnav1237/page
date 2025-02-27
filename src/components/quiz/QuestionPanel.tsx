import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../../store/quizSlice';
import { RootState } from '../../store';
import OptionButton from './OptionButton';
import NavigationButtons from './NavigationButtons';

const QuestionPanel = React.memo(() => {
    const dispatch = useDispatch();
    const { questions, currentQuestionIndex, answers } = useSelector((state: RootState) => state.quiz);
    const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);
    const selectedAnswer = answers[currentQuestionIndex];

    const handleAnswerSelect = (optionIndex: number) => {
        dispatch(answerQuestion({ index: currentQuestionIndex, answer: optionIndex }));
    };

    return (
        <div className="w-2/3">
            <div className="mb-8">
                <h2 className="text-lg mb-4">
                    {currentQuestion.text}
                </h2>
                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                        <OptionButton
                            key={option.label}
                            label={option.label}
                            text={option.text}
                            isSelected={selectedAnswer === index}
                            onClick={() => handleAnswerSelect(index)}
                        />
                    ))}
                </div>
            </div>
            <NavigationButtons />
        </div>
    );
});

QuestionPanel.displayName = 'QuestionPanel';
export default QuestionPanel;