import {request} from 'services/request';

const moment = require('moment');

export class AddTask extends Component {
  constructor(props) {
	super(props);
	this.state = {toggleAddTaskPopup: "hidden"}
  }

  addTask() {
    const title = document.querySelector('#title'),
      descr = document.querySelector('#description'),
      form = document.querySelector('#addTask');
    request('tasks', 'POST', {
      completed: false,
      createdAt: moment().format('D-M-YYYY'),
      date: this.props.date,
      userId: this.props.userId,
      description: descr.value,
      title: title.value
    }).then(() => this.props.getTasks(this.props.userId)).then(() => form.reset()).then(()=>this.togglePopup());

  }
  togglePopup() {
    var css = (this.state.toggleAddTaskPopup === "hidden") ? "show" : "hidden";
    this.setState({"toggleAddTaskPopup":css});
}
  render() {
    return (
      <div className="add-task">
        <div className="container">
          <button className="btn--wide btn--round" onClick={this.togglePopup.bind(this)}>Add todo</button>
        </div>
        <div className={`${this.state.toggleAddTaskPopup} popup`} >
          <button className="popup-close" onClick={this.togglePopup.bind(this)}>&#10005;</button>
          <form
            id="addTask"
            className="task-add-form"
            onSubmit={e => {
            e.preventDefault();
            this.addTask()
          }}>
            <fieldset>
              <legend>Add To-Do</legend>
              <div className="container">
                <label htmlFor="">To-do</label>
                <input
                  type="text"
                  id="title"
                  required
                  placeholder="Title"
                  maxLength="80"
                  minLength="3"/>
                <label htmlFor="">To-do description
                </label>
                <textarea
                  type="text"
                  id="description"
                  placeholder="Description"
                  maxLength="120"
                  minLength="3"/>
                <button type="submit">
                  Add to-do
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}