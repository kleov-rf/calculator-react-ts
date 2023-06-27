import OperationResult from "./components/OperationResult.tsx";
import NumberPad from "./components/NumberPad.tsx";
import Operators from "./components/Operators.tsx";
import ResultButton from "./components/ResultButton.tsx";

export function Calculator() {
    return (
        <>
            <OperationResult/>
            <NumberPad/>
            <Operators/>
            <ResultButton/>
        </>
    )

}