
export class Timer extends React.Component {
    constructor() {
        super();
        this.state = { date: '', time: ''};
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.getNow(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    getNow() {
        let today = new Date();
        let date = `${("0" + today.getDate()).slice(-2)}.${("0" + today.getMonth() + 1).slice(-2)}.${today.getFullYear()}`;
        let time = `${("0" + today.getHours()).slice(-2)}.${("0" + today.getMinutes() + 1).slice(-2)}.${("0" + today.getSeconds()).slice(-2)}`;
        this.setState({ date: date, time: time });
    }

    render() {
        return (
                <div className="timer">
                    {this.state.date}
                    <br/>
                    {this.state.time}
                </div>
        )
    }
}