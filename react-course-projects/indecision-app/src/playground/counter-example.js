// let count = 0;

// const addOne = () => {
//     count += 1;
//     renderCounter();
// };

// const minusOne = () => {
//     count -= 1;
//     renderCounter();
// };

// const reset = () => {
//     count = 0;
//     renderCounter();
// };

// const renderCounter = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+ 1</button>
//             <button onClick={reset}>reset</button>
//             <button onClick={minusOne}>-1</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounter();

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // step 1 setting up default object
        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        // Call this.setState decrement the count by 1
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

        // this.setState({
        //     count: 0
        // });
    }

    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Create three method: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor



ReactDOM.render(<Counter />, document.getElementById('app'));