import {Tabs, TabContent, Tablink, Tab} from 'components/Tabs';
import {AddTask} from './AddTask';
import {request} from 'services/request';
import {store} from 'store';
import DatePicker from 'react-date-picker';

const moment = require('moment');

moment.locale('ru');

export class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      week: props.week,
      date: props.date,
      tasks: [],
      tasksPerDay: [],
      focus: false
    };
    this.days = [
      {
        title: 'Mon',
        id: 1
      }, {
        title: 'Tue',
        id: 2
      }, {
        title: 'Wed',
        id: 3
      }, {
        title: 'Thu',
        id: 4
      }, {
        title: 'Fri',
        id: 5
      }, {
        title: 'Sat',
        id: 6
      }, {
        title: 'Sun',
        id: 7
      }
    ];
  }

  getTasks(userId) {
    request(`tasks?userId=${userId}`)
      .then(tasks => tasks.reverse().sort(task => task.completed == true))
      .then(tasks => this.setState({tasks}));
  }

  deleteTask(task) {
    if (confirm(`Delete this to-do?
    ${task.title}`)) {
      request(`tasks/${task.id}`, "DELETE").then(() => this.getTasks(this.state.userId))
    }
  }

  updateTask(task, date) {
    const form = document.querySelector(`#task_${task.id}`),
      inputs = form.elements,
      completed = inputs[0].checked,
      title = inputs[1],
      descr = inputs[2];
    if (title.validity.valid) {
      request(`tasks/${task.id}`, 'PUT', {
        completed,
        createdAt: moment().format('D-M-YYYY'),
        date: date,
        userId: this.state.userId,
        description: descr.value,
        title: title.value
      }).then(() => this.getTasks(this.state.userId))
    }
  }
  setCompleted(task, e) {
    const completed = e.target.checked;
    request(`tasks/${task.id}`, 'PATCH', {completed}).then(() => this.getTasks(this.state.userId))
  }
  setTab = (id = moment(this.state.date, 'D-M-YYYY').isoWeekday()) => {
    this.setState({
      tab: id,
      animation: 'animated pulse',
      date: moment()
        .isoWeekday(id)
        .week(this.state.week)
        .format('D-M-YYYY')
    });
    setTimeout(() => history.pushState({}, 'date', `${this.state.date}`));
    setTimeout(() => this.setState({animation: ''}), 300);
  }
  componentWillMount() {
    store.subscribe(() => this.forceUpdate());
    const userId = store
      .getState()
      .signin
      .user
      .id;
    this.setState({userId})
    this.getTasks(userId);
  }
  componentWillReceiveProps(props) {
    this.setState({week: props.week, date: props.date});
  }
  goToDate = (date) => {
	  console.log(moment(date).week());
    this.setTab();
    this.setState({
	  date: `/to-dos/${moment(date).format('D-M-YYYY')}`,
	  week: moment(date).week()
	});
  }
  render() {
    return (
      <Tabs
        active={moment(this.state.date, 'D-M-YYYY').isoWeekday() - 1}
        select={this.setTab}>

        {this
          .days
          .map(day => {
            const date = moment()
                .isoWeekday(day.id)
                .week(this.state.week)
                .format('D-M-YYYY'),
              tasks = this
                .state
                .tasks
                .filter(task => task.date == date);
            return (
              <Tab key={day.id}>
                <Tablink title={day.title} date={date}/>
                <TabContent>
                  <div className={`tasks-date ${this.state.animation} ${this.props.animation}`}>
                    <DatePicker
                      onChange={this.goToDate}
                      value={new Date(moment(this.state.date, 'D-M-YYYY').format())}/>
                    <span className="selected-date">{moment(this.state.date, 'D-M-YYYY').format('D.M.YYYY')}</span>
                  </div>

                  {tasks.length
                    ? <ul className="task-list">
                        {tasks.map((task, index) => <li key={task.id}>
                          <form
                            id={`task_${task.id}`}
                            className="task-update-form container"
                            action=""
                            onSubmit={e => e.preventDefault()}>
                            <input
                              name={`complete_${task.id}`}
                              id={`complete_${task.id}`}
                              type="checkbox"
                              onChange={e => this.setCompleted(task, e)}
                              defaultChecked={task.completed}/>
                            <label
                              htmlFor={`complete_${task.id}`}
                              title={`Mark ${task.completed
                              ? 'not completed'
                              : 'completed'}`}></label>
                            <input
                              type="text"
                              key={`tt_${task.id}`}
                              className={`task-title ${task.completed
                              ? 'completed'
                              : ''}`}
                              defaultValue={`${task.title}`}
                              onBlur={this
                              .updateTask
                              .bind(this, task, date)}
                              required
                              placeholder="Task title"
                              maxLength="80"
                              minLength="3"
                              title='Edit to-do title'/>
                            <span className="hint">
								Title must contain at least 3 characters: latin letters and/or numbers
							</span>
                            <textarea
                              type="text"
                              key={`td_${task.id}`}
                              className="task-desc"
                              defaultValue={task.description}
                              onBlur={this
                              .updateTask
                              .bind(this, task, date)}
                              minLength="3"
                              maxLength="120"
                              placeholder="No description"
                              title='Edit to-do description'/>
                            <button
                              className="delete-task"
                              onClick={this
                              .deleteTask
                              .bind(this, task)}
                              title='Delete to-do'>
                              &#x2573;
                            </button>
                          </form>
                        </li>)}
                      </ul>
                    : <p className="center">No to-dos yet...</p>}
                  <AddTask
                    date={date}
                    userId={this.state.userId}
                    getTasks={this
                    .getTasks
                    .bind(this)}/>
                </TabContent>
              </Tab>
            )
          })}
      </Tabs>
    );
  }
}