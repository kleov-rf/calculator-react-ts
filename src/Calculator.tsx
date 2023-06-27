import OperationResult from './components/OperationResult.tsx'
import NumberPad from './components/NumberPad.tsx'
import Operators from './components/Operators.tsx'
import ResultButton from './components/ResultButton.tsx'
import {useState} from 'react'

export function Calculator() {
    const [firstNumbers, setFirstNumbers] = useState<number[]>([])
    const [lastNumbers, setLastNumbers] = useState<number[]>([])
    const [operator, setOperator] = useState<string | null>(null)
    const addNumber = (newNumber: number) => {
        const selectedNumbers = operator ? lastNumbers : firstNumbers;
        const updatedNumbers = selectedNumbers.slice(0) // array copy by value.
        updatedNumbers.push(newNumber);
        operator ? setLastNumbers(updatedNumbers) : setFirstNumbers(updatedNumbers);
    }
    const changeOperator = (newOperator: string) => {
        setOperator(newOperator);
    }

    return (
        <>
            <OperationResult firstNumbers={firstNumbers} operator={operator} lastNumber={lastNumbers}/>
            <main
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '5px',
                    marginBottom: '5px',
                }}
            >
                <NumberPad introducingNumberHandler={addNumber}/>
                <Operators changeOperator={changeOperator}/>
            </main>
            <ResultButton/>
        </>
    )
}
