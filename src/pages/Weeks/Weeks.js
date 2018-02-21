
import { Week } from 'pages/Weeks/Week';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import './weeks.scss';

const moment = require('moment');

moment.locale('ru');

export class Weeks extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            week: moment(props.match.params.date, 'D-M-YYYY').week(), 
            date: props.match.params.date, 
            animation:"", 
            animationForDate:"" };
    }
    prevWeek() {
        let { week } = this.state;
        const date = moment(window.location.href.substring(window.location.href.lastIndexOf('/') + 1), 'D-M-YYYY');
        this.setState({
            week: week - 1,
            date: date.subtract(7,'d').format('D-M-YYYY'),
            animation: 'animated fadeOutRight',
            animationForDate: 'animated pulse'
        });

        setTimeout(() => {
        window.history.pushState({}, 'prev', `/to-dos/${this.state.date }`);
            this.setState({
                animation: 'animated fadeInLeft'
            })
        }, 150);
        setTimeout(() => this.setState({
            animation:"",
            animationForDate: ''
        }), 450);
    }
    nextWeek() {
        let { week } = this.state;
        const date = moment(window.location.href.substring(window.location.href.lastIndexOf('/') + 1), 'D-M-YYYY');
        this.setState({
            week: week + 1,
            date: date.add(7,'d').format('D-M-YYYY'),
            animation: 'animated fadeOutLeft',
            animationForDate: 'animated pulse'
        });

        setTimeout(() => {
        window.history.pushState({}, 'next', `/to-dos/${this.state.date }`);
            this.setState({
            animation: 'animated fadeInRight'
        })}, 150);

        setTimeout(() => this.setState({
            animation:"",
            animationForDate: ''
        }), 450)
    }
    render() {
        return (
            <section className="tasks-tabs">
                <header className="tasks-tabs__header">
                    <div className="container">
                        <button onClick={ this.prevWeek.bind(this) }>&#8672; previous week</button>
                        <span
                            className={ `week ${this.state.animation}` }
                            ref={ weekNumber => this.weekNumber = weekNumber } >
                            {`${moment().day(1).week(this.state.week).format('D.M.YYYY')} \u2014 ${moment().day(7).week(this.state.week).format('D.M.YYYY')}`}
                        </span>
                        <button onClick={ this.nextWeek.bind(this) }>next week &#8674;</button>
                    </div>
                </header>
                <Week 
                    week={this.state.week}
                    date={this.state.date}
                    tasks={this.props.tasks}
                    animation={this.state.animationForDate} />
            </section>
        )
    }
}