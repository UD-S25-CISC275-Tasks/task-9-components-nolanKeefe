import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "♥️" | "🐰" | "🎂" | "🎃" | "🎅";

    const Year_Transition: Record<Holiday, Holiday> = {
        "♥️": "🐰",
        "🐰": "🎂",
        "🎂": "🎃",
        "🎃": "🎅",
        "🎅": "♥️"
    };
    const Alphabet_Transition: Record<Holiday, Holiday> = {
        "🎂": "🎅",
        "🎅": "🐰",
        "🐰": "🎃",
        "🎃": "♥️",
        "♥️": "🎂"
    };

    const [holiday, setHoliday] = useState<Holiday>("♥️");

    function changebyYear(): void {
        const newHoliday = Year_Transition[holiday];
        setHoliday(newHoliday);
    }
    function changebyAlphabet(): void {
        const newHoliday = Alphabet_Transition[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            Cycle Holiday
            <Button onClick={changebyAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changebyYear}>Advance by Year</Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
