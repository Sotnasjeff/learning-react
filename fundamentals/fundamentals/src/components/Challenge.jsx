const Challenge = () => {
    const a = 5
    const b = 7

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={() => console.log(a + b)}>Clique aqui para ver a soma</button>
        </div>
    )
}

export default Challenge