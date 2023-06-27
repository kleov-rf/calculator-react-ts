interface NumberPadProps {
  introducingNumberHandler: (x: number) => void
}

const NumberPad = ({ introducingNumberHandler }: NumberPadProps) => {
  return (
    <article style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
        <button
          key={`_${number}`}
          onClick={() => introducingNumberHandler(number)}
          style={number == 0 ? { gridColumn: '1 / 4' } : {}}
        >
          {number}
        </button>
      ))}
    </article>
  )
}

export default NumberPad
