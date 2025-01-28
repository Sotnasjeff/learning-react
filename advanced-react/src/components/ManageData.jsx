import { useState } from "react"

const ManageData = () => {
    let someData = 10

    const [number, setNumber] = useState(10);
    return(
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (11)}>Mudar valor variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(12)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData