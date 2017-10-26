console.log('builddd it works');

let initialDetail = false;

const showDetails = () => {
    initialDetail = !initialDetail;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            {initialDetail && (
                <div>
                    <p>
                        Hey this is the hidden message
                    </p>
                </div>
            )}
            <button onClick={showDetails}>{initialDetail  ? 'hideDetails' : 'showDetails' }</button>      
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render();