import React, {useRef, useState} from 'react';
import styles from "./Stopwatch.module.css"
import {Button, ButtonGroup, Stack} from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import {Autorenew} from "@mui/icons-material";
import CachedIcon from '@mui/icons-material/Cached';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

export const Stopwatch = () => {
    const [now, setNow] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const intervalRef = useRef(0);

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = +setInterval(() => {
            setNow(Date.now());
        }, 10);
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
    };

    const handleReset = () => {
        setNow(0);
        setStartTime(0)
    }
    let secondsPassed = 0;

    if (startTime !== 0 && now !== 0) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerBlock}>
                <h1 className={styles.header}>TIME PASSED</h1>
                <div className={styles.display}>
                    <h2>{secondsPassed.toFixed(1)}</h2>
                </div>

                <div className={styles.buttonBlock}>
                    <Button variant="contained"
                            onClick={handleStart}
                            endIcon={<PlayArrowIcon/>}
                            size="large">
                        Start</Button>
                    <Button variant="contained"
                            onClick={handleStop}
                            endIcon={<StopIcon/>}
                            size="large">Stop</Button>
                    <Button variant="contained"
                            endIcon={<CachedIcon/>}
                            size="large"
                            onClick={handleReset}>
                        Reset
                    </Button>

                </div>
            </div>
        </div>
    );
};
