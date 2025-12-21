import { Card } from "@core/components/card/Card";
import { useEffect, useState } from "react";

export const FullTimer: React.FC = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false)

    const handleStart = (isRunning: boolean): void => {
        setIsRunning(isRunning)
    }

    const handleClear = (): void => {
        setTimer(0)
        setIsRunning(false)
    }

    useEffect(() => {
        if (!isRunning) {
            return
        }
        const intervalId = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000);

        return (): void => {
            if(intervalId) {
                clearInterval(intervalId)
            }
        };
    }, [isRunning]);

    return (
        <Card title="Timer">
            <p>{timer}</p>
            <button onClick={() => handleStart(true)}>Start</button>
            <button onClick={() => handleStart(false)}>Pause</button>
            <button onClick={handleClear}>Clear</button>
        </Card>
    );
};
