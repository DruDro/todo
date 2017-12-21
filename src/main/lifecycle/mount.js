export class Mount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'init',
            boxBg: '#ccc'
        };



        this.updateStatus = this.updateStatus.bind(this);
    }

    componentWillReceiveProps() {
        const counter = this.props.code + 1;
        if (counter % 3 == 0 && counter % 5 !== 0) {
            this.setState({ boxBg: 'green' });
        }
        else if (counter % 5 == 0 && counter % 3 !== 0) {
            this.setState({ boxBg: 'blue' });
        }
        else if (counter % 5 == 0 && counter % 3 == 0) {
            this.setState({ boxBg: '#0ff' });
        }
        else {
            this.setState({ boxBg: '#ccc' });
        }
        return true;
    }

    updateStatus(e) {
        this.setState({
            status: this.state.status + '+'
        });

        e.preventDefault();
    }

    render() {


        return (
            <code id="mount" style={{ background: this.state.boxBg, display: "block" }}>
                <span>
                    The code from props is {this.props.code}<br />
                    The code from state is {this.state.status}
                </span>
                <a href="" onClick={this.updateStatus}>Update status</a>
            </code>
        );
    }

};