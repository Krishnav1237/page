import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState } from '../types';

const initialQuestions = Array(25).fill(null).map((_, index) => ({
    id: (index + 1).toString().padStart(2, '0'),
    text: "Which design pattern allows you to compose objects into tree structures to represent part-whole hierarchies?",
    options: [
        { label: 'A', text: 'Proxy' },
        { label: 'B', text: 'Decorator' },
        { label: 'C', text: 'Strategy' },
        { label: 'D', text: 'Composite' }
    ]
}));

const initialState: QuizState = {
    questions: initialQuestions,
    currentQuestionIndex: 4,
    answers: { 0: 3, 1: 2, 2: 1, 3: 0 },
    completed: false
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setCurrentQuestion: (state, action: PayloadAction<number>) => {
            state.currentQuestionIndex = action.payload;
        },
        answerQuestion: (state, action: PayloadAction<{ index: number, answer: number }>) => {
            state.answers[action.payload.index] = action.payload.answer;
        },
        submitQuiz: (state) => {
            state.completed = true;
        }
    }
});

export const { setCurrentQuestion, answerQuestion, submitQuiz } = quizSlice.actions;
export default quizSlice.reducer;