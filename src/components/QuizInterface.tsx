'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Settings, User, Volume2 } from 'lucide-react';

const QuizInterface = () => {
    // State management
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(4);
    const [answers, setAnswers] = useState<{[key: string]: number}>({
        0: 3, 1: 2, 2: 1, 3: 0
    });
    const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    // Questions data
    const questions = Array(25).fill(null).map((_, index) => ({
        id: (index + 1).toString().padStart(2, '0'),
        text: "Which design pattern allows you to compose objects into tree structures to represent part-whole hierarchies?",
        options: [
            { label: 'A', text: 'Proxy' },
            { label: 'B', text: 'Decorator' },
            { label: 'C', text: 'Strategy' },
            { label: 'D', text: 'Composite' }
        ]
    }));

    // Timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Format time remaining
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Navigation handlers
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Answer selection handler
    const handleAnswerSelect = (optionIndex: number) => {
        setAnswers((prev) => ({
            ...prev,
            [currentQuestionIndex]: optionIndex
        }));
    };

    // Question selection handler
    const handleQuestionSelect = (index: number) => {
        setCurrentQuestionIndex(index);
    };

    // Help handler
    const handleNeedHelp = () => {
        alert('Help section will be available soon!');
    };

    // Submit handler
    const handleSubmit = () => {
        const unansweredCount = questions.length - Object.keys(answers).length;
        if (unansweredCount > 0) {
            if (confirm(`You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`)) {
                alert('Test submitted successfully!');
            }
        } else {
            alert('Test submitted successfully!');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Top Navigation Bar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-full px-4 flex justify-between items-center h-14">
                    <div className="flex items-center gap-4">
                        {/* VR Logo */}
                        <div className="text-xl font-bold">VR</div>

                        {/* Sound Icon */}
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Volume2 size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Settings */}
                        <button
                            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <Settings size={20} />
                        </button>

                        {/* User Profile */}
                        <div className="flex items-center gap-2 relative">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                <User size={20} />
                            </div>
                            {isSettingsOpen && (
                                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Profile Settings
                                    </button>
                                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Side Navigation */}
            <div className="fixed left-0 top-14 bottom-0 w-14 bg-white shadow-sm flex flex-col items-center py-4">
                <button className="p-2 hover:bg-gray-100 rounded-full mb-2">
                    <span className="font-medium">目</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <span className="text-blue-500">℗</span>
                </button>
            </div>

            {/* Main Content */}
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
                                <button
                                    onClick={handleSubmit}
                                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                                >
                                    Submit Test
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-b-lg shadow">
                        <div className="flex justify-between items-center mb-6 text-sm">
                            <div>List of 25 Questions (25 Marks)</div>
                            <div>Time Remaining: {formatTime(timeRemaining)}</div>
                            <div>Questions: {Object.keys(answers).length}/25 Completed</div>
                        </div>

                        <div className="flex gap-6">
                            {/* Question List Panel */}
                            <div className="w-1/3 border-r pr-4 h-[500px] overflow-y-auto">
                                {questions.map((question, index) => (
                                    <div
                                        key={index}
                                        className={`p-3 mb-2 rounded cursor-pointer ${
                                            answers[index] !== undefined ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        } ${currentQuestionIndex === index ? 'border-l-4 border-blue-500' : ''}`}
                                        onClick={() => handleQuestionSelect(index)}
                                    >
                                        <div className="flex gap-2">
                                            {answers[index] !== undefined && (
                                                <span className="text-green-500">✓</span>
                                            )}
                                            <span className="font-medium">{question.id}.</span>
                                            <span className="text-sm text-gray-600 truncate">
                        {index < 4 ? "Which design pattern allows you to compose objects into tree structures to repre..." :
                            index === 4 ? "Which design pattern allows you to compose objects into tree structures..." :
                                question.text.substring(0, 45) + "..."}
                      </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Current Question Panel */}
                            <div className="w-2/3">
                                <div className="mb-8">
                                    <h2 className="text-lg mb-4">
                                        {questions[currentQuestionIndex].text}
                                    </h2>
                                    <div className="space-y-3">
                                        {questions[currentQuestionIndex].options.map((option, index) => (
                                            <button
                                                key={option.label}
                                                onClick={() => handleAnswerSelect(index)}
                                                className={`w-full text-left p-3 border rounded transition ${
                                                    answers[currentQuestionIndex] === index ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                                                }`}
                                            >
                                                <span className="mr-3">{option.label}</span>
                                                {option.text}
                                            </button>
                                        ))}
                                    </div>
                                </div>

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizInterface;