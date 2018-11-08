const { Component } = wp.element;

class Button extends Component {

    constructor( props ) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleIncrement() {
        return() => {
             this.setState( {
                count: this.state.count +1,
            } );
        }
    }

    handleAlert() {
        return() => {
            alert('Hello World!');
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={ this.handleIncrement() }>+Up</button>
                <button onClick={ this.handleAlert() }>Say Hi</button>
            </div>
        );
    }
}

export default Button;