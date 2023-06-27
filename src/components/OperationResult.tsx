interface OperationResultProps {
    firstNumbers: number[];
    operator: string | null;
    lastNumber: number[];
}

const OperationResult = ({firstNumbers, operator, lastNumber}: OperationResultProps) => {
    return (
        <header>
            <h3>{firstNumbers.join('')} {operator} {lastNumber.join('')} </h3>
        </header>
    )
}

export default OperationResult
