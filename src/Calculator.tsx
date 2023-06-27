import OperationResult from "./components/OperationResult.tsx";
import NumberPad from "./components/NumberPad.tsx";
import Operators from "./components/Operators.tsx";
import ResultButton from "./components/ResultButton.tsx";
import { useState } from "react";

export function Calculator() {
    const [numbers, setNumbers] = useState<number[]>([])

    const addNumber = (newNumber: number) => {
        const updatedNumbers = numbers.slice(0) // array copy by value.
        updatedNumbers.push(newNumber)
        setNumbers(updatedNumbers)
    }

    return (
        <>
            <OperationResult numbers={numbers}/>
            <NumberPad introducingNumberHandler={addNumber} />
            <Operators/>
            <ResultButton/>
        </>
    )

}