class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentUnMount() {
        console.log('Unmount success');
    }
    

    // handleDeleteOptions
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        this.setState(() => ({
            options: []
        }));
    }

    // handleDeleteOption
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));

        // console.log(optionToRemove);
    }



    // handlePick - pass down to Action and setup onClick- bind here
    // randomly pick and option and alert it
    handlePick() {
        const ranNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[ranNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    } 

    render() {
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Actions 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

// Stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
  title: 'Indecision'  
};


// class Actions extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// Stateless Functional Component
const Actions = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>remove all</button>
//                 <ol>    
//                     {
//                         this.props.options.map((option) => {
//                             return <Option key={option} optionText={option}/>;
//                         })
//                     }
//                 </ol>
//             </div>
//         );
//     }
// }

// Stateless Functional Component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <ol>    
                {
                    props.options.map((option) => {
                        return <Option 
                                    key={option} 
                                    optionText={option}
                                    handleDeleteOption={props.handleDeleteOption}/>;
                    })
                }
            </ol>
        </div>
    );
};


// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

// Stateless Functional Component
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}>
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        // this.setState(() => {
        //     return {
        //         error: error
        //     }
        // })

        this.setState(() => ({
            error: error
        }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const obj = {
    name: 'Vik',
    getName() {
        return this.name;
    }
}

const func = function() {
    console.log(this);
}

func();


// this is what we called referencing
const getName = obj.getName.bind(obj);

console.log(getName());

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));