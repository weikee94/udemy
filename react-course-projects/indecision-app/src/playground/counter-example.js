let count = 0;

const addOne = () => {
    count += 1;
    renderCounter();
};

const minusOne = () => {
    count -= 1;
    renderCounter();
};

const reset = () => {
    count = 0;
    renderCounter();
};

const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+ 1</button>
            <button onClick={reset}>reset</button>
            <button onClick={minusOne}>-1</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounter();