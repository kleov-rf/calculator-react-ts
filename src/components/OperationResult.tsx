interface OperationResultProps {
  numbers: number[]
}

const OperationResult = ({ numbers }: OperationResultProps) => {
  return (
    <header>
      <h3>{numbers.join('')}</h3>
    </header>
  )
}

export default OperationResult
