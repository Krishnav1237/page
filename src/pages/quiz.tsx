import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import Timer from '../components/common/Timer';
import SubmitButton from '../components/common/SubmitButton';

// Code splitting using React.lazy
const QuestionList = React.lazy(() => import('../components/quiz/QuestionList'));
const QuestionPanel = React.lazy(() => import('../components/quiz/QuestionPanel'));

const QuizPage = () => {
    const { answers, questions } = useSelector((state: RootState) => state.quiz);
    const completedCount = Object.keys(answers).length;

    const handleNeedHelp = () => {
        alert('Help section will be available soon!');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <Sidebar />

            <div className="ml-14">
                <div className="max-w-4xl mx-auto p-6">
                    <div className="bg-blue-100 p-4 rounded-t-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="text-sm text-gray-600">Test 1</div>
                                <h1 className="text-xl font-semibold">Data Lead - MCQ</h1>
                            </div>
                            <div className="flex gap-4 items-center">
                                <button
                                    onClick={handleNeedHelp}
                                    className="text-blue-600 hover:underline"
                                >
                                    Need Help?
                                </button>
                                <SubmitButton />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-b-lg shadow">
                        <div className="flex justify-between items-center mb-6 text-sm">
                            <div>List of {questions.length} Questions ({questions.length} Marks)</div>
                            <Timer />
                            <div>Questions: {completedCount}/{questions.length} Completed</div>
                        </div>

                        <div className="flex gap-6">
                            <Suspense fallback={<div>Loading questions...</div>}>
                                <QuestionList />
                            </Suspense>
                            <Suspense fallback={<div>Loading question...</div>}>
                                <QuestionPanel />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;