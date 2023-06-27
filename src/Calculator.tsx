import {OperationResult} from "./OperationResult.tsx";
import {NumberPad} from "./NumberPad.tsx";
import {Operators} from "./Operators.tsx";
import {ResultButton} from "./ResultButton.tsx";

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