class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Actions />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Actions extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <h3>Options component here</h3>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <h6>Option Here</h6>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <h4>Add Options Component here</h4>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));