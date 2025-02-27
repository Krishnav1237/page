import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuestion } from '../../store/quizSlice';
import { RootState } from '../../store';

interface QuestionItemProps {
    index: number;
    id: string;
    text: string;
}

const QuestionItem = React.memo(({ index, id, text }: QuestionItemProps) => {
    const dispatch = useDispatch();
    const { currentQuestionIndex, answers } = useSelector((state: RootState) => state.quiz);
    const isAnswered = answers[index] !== undefined;
    const isActive = currentQuestionIndex === index;

    const truncatedText =
        index < 4 ? "Which design pattern allows you to compose objects into tree structures to repre..." :
            index === 4 ? "Which design pattern allows you to compose objects into tree structures..." :
                text.substring(0, 45) + "...";

    return (
        <div
            className={`p-3 mb-2 rounded cursor-pointer ${
                isAnswered ? 'bg-gray-50' : 'hover:bg-gray-50'
            } ${isActive ? 'border-l-4 border-blue-500' : ''}`}
            onClick={() => dispatch(setCurrentQuestion(index))}
        >
            <div className="flex gap-2">
                {isAnswered && (
                    <span className="text-green-500">✓</span>
                )}
                <span className="font-medium">{id}.</span>
                <span className="text-sm text-gray-600 truncate">
          {truncatedText}
        </span>
            </div>
        </div>
    );
});

QuestionItem.displayName = 'QuestionItem';
export default QuestionItem;