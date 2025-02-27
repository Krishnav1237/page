import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementTimer } from '../../store/timerSlice';
import { RootState } from '../../store';

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const Timer = React.memo(() => {
    const dispatch = useDispatch();
    const { timeRemaining } = useSelector((state: RootState) => state.timer);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(decrementTimer());
        }, 1000);

        return () => clearInterval(timer);
    }, [dispatch]);

    return (
        <div>Time Remaining: {formatTime(timeRemaining)}</div>
    );
});

Timer.displayName = 'Timer';
export default Timer;