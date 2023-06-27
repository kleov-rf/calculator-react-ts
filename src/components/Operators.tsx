interface Props {
    changeOperator: (newOperator: string) => void;
}

const Operators = ({changeOperator}: Props) => {
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <button onClick={() => changeOperator("+")}>+</button>
      <button onClick={() => changeOperator("-")}>-</button>
      <button onClick={() => changeOperator("*")}>*</button>
      <button onClick={() => changeOperator("/")}>/</button>
    </aside>
  )
}

export default Operators

