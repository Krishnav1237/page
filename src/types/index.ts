export interface Question {
    id: string;
    text: string;
    options: {
        label: string;
        text: string;
    }[];
}

export interface QuizState {
    questions: Question[];
    currentQuestionIndex: number;
    answers: { [key: string]: number };
    completed: boolean;
}

export interface TimerState {
    timeRemaining: number;
    isPaused: boolean;
}

export interface SettingsState {
    isSettingsOpen: boolean;
    fontScale: number;
    highContrastMode: boolean;
}