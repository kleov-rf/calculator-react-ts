interface OperationResultProps {
    numbers: number[]
}


const OperationResult = ({numbers}: OperationResultProps) => {
    return (
        <header style={{'border': '1px red solid'}}>
            {numbers.join('')}
        </header>
    )
}

export default OperationResult