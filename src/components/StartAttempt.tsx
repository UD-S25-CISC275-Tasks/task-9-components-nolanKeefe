import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setValue] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    function flipProgress(): void {
        // Set visible to be the logical opposite of its previous value
        setProgress(!inProgress);
    }
    function startClick(): void {
        setValue(attempts - 1);
        flipProgress();
    }
    return (
        <span>
            {attempts <= 0 || inProgress ? ( //if attempts is less than 0 and inprogress is true it should be a disabled button
                <Button
                    onClick={() => {
                        startClick();
                    }}
                    disabled={true}
                >
                    Start Quiz
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        startClick();
                    }}
                >
                    Start Quiz
                </Button>
            )}{" "}
            attempts: {attempts}
            <Button
                onClick={() => {
                    flipProgress();
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setValue(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </span>
    );
}
