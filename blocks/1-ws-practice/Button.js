const { Component } = wp.element;

class Button extends Component {

    constructor ( props ) {
        super(props);
        this.state = {
            count: 0
        };
    }

//Uncommenting either function below breaks the block

    // handleIncrement = () => {
    //     alert('Hello world!');
    // };

    // handleIncrement = () => {
    //     this.setState({ count: this.state.count + 1 });
    // };

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={ this.handleIncrement }>{ '+Up' }</button>
                <button onClick={ "alert('Hello World!')" }>{ 'Say Hi' }</button>
            </div>
        );
    }
}

export default Button;