const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    };

    const render = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando aquilo!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Parabéns você clicou")}>Clique aqui também</button>
            </div>
            {render(true)}
            {render(false)}
        </div>
    );
};

export default Events