interface NumberPadProps {
  introducingNumberHandler: (x: number) => void
}

const NumberPad = ({ introducingNumberHandler }: NumberPadProps) => {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
          <button
            key={`_${number}`}
            onClick={() => introducingNumberHandler(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  )
}

export default NumberPad
