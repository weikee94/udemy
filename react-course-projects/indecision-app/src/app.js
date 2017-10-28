class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ['Thing One', 'Thing Two', 'Thing Four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Actions />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Actions extends React.Component {
    handleActions() {
        alert('this is click from actions');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleActions}>What should I do?</button>
            </div>
        );
    }
}

// Add Remove all button
// Setup handleRemoveAll -> alert some messages
// setup onclick to fire the method

class Options extends React.Component {
    handleRemoveAll() {
        alert('remove all detected');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>remove all</button>
                <ol>    
                    {
                        this.props.options.map((option) => {
                            return <Option key={option} optionText={option}/>;
                        })
                    }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if valud, then alert

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));