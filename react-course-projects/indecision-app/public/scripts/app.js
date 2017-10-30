'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Build = function (_React$Component) {
    _inherits(Build, _React$Component);

    function Build(props) {
        _classCallCheck(this, Build);

        var _this = _possibleConstructorReturn(this, (Build.__proto__ || Object.getPrototypeOf(Build)).call(this, props));

        _this.showDetails = _this.showDetails.bind(_this);

        _this.state = {
            initialDetail: false
        };
        return _this;
    }

    _createClass(Build, [{
        key: 'showDetails',
        value: function showDetails() {
            this.setState(function (prevState) {
                return {
                    initialDetail: !prevState.initialDetail
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Tools'
                ),
                this.state.initialDetail && React.createElement(
                    'div',
                    null,
                    'This is hidden message'
                ),
                React.createElement(
                    'button',
                    { onClick: this.showDetails },
                    this.state.initialDetail ? 'hideDetails' : 'showDetails'
                )
            );
        }
    }]);

    return Build;
}(React.Component);

ReactDOM.render(React.createElement(Build, null), document.getElementById('app'));
