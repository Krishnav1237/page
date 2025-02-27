import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import QuestionItem from './QuestionItem';

const QuestionList = React.memo(() => {
    const { questions } = useSelector((state: RootState) => state.quiz);

    return (
        <div className="w-1/3 border-r pr-4 h-[500px] overflow-y-auto">
            {questions.map((question, index) => (
                <QuestionItem
                    key={question.id}
                    index={index}
                    id={question.id}
                    text={question.text}
                />
            ))}
        </div>
    );
});

QuestionList.displayName = 'QuestionList';
export default QuestionList;