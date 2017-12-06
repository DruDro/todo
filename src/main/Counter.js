

export class Counter extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 }
    }
    clickHandler() {
        this.setState({ counter: this.state.counter + 1 });
    }
    render(){
        return (
            <div className="counter">
                <button 
                    // style={ { width: "150px" } }
                    onClick={this.clickHandler.bind(this)}>inc</button>&nbsp;
                <span>{this.state.counter}</span>
            </div>
        )
    }
}