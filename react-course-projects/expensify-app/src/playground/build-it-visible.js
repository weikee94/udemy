// console.log('builddd it works');

// let initialDetail = false;

// const showDetails = () => {
//     initialDetail = !initialDetail;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             {initialDetail && (
//                 <div>
//                     <p>
//                         Hey this is the hidden message
//                     </p>
//                 </div>
//             )}
//             <button onClick={showDetails}>{initialDetail  ? 'hideDetails' : 'showDetails' }</button>      
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('app');

// render();



// Visibility Toggle - render, constructor, handleToggleVisibility
// visibility -> false

class Build extends React.Component {

    constructor(props) {
        super(props);
        this.showDetails = this.showDetails.bind(this);

        this.state = {
            initialDetail: false
        };
    }

    showDetails() {
        this.setState((prevState) => {
            return {
                initialDetail: !prevState.initialDetail
            };
        });
    }

    render() {
        return(
            <div>
                <h1>Visibility Tools</h1>
                {
                    this.state.initialDetail && (
                        <div>
                            This is hidden message
                        </div>
                    )
                }
                <button onClick={this.showDetails}>{ this.state.initialDetail ? 'hideDetails' : 'showDetails' }</button>
            </div>
        );
    }
}

ReactDOM.render(<Build />, document.getElementById('app'));