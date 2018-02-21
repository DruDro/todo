import { request } from 'services/request';
import { store } from 'store';

export class Incomplete extends Component {
	constructor(){
		super();
		this.title = "Active to-dos";
		this.state = {tasks:[], userId: null};
	}
	getTasks(userId = this.state.userId) {
		request(`tasks?userId=${userId}`).then(tasks => tasks.reverse().filter(task => task.completed == false)).then(tasks => {
			this.setState({userId, tasks});
		});
	}
  deleteTask(task) {
    if (confirm(`Delete this to-do? 
    ${task.title}`)) {
      request(`tasks/${task.id}`, "DELETE")
      .then(() => this.getTasks(this.state.userId))
    }
  }

  updateTask(task) {
    const form = document.querySelector(`#task_${task.id}`),
      inputs = form.elements,
      completed = inputs[0].checked,
      title = inputs[1],
      descr = inputs[2];
    if (title.validity.valid) {
      request(`tasks/${task.id}`, 'PATCH', {
        description: descr.value,
        title: title.value
      }).then(() => this.getTasks(this.state.userId))
    }
  }
  setCompleted(task, e) {
    const completed = e.target.checked;
    request(`tasks/${task.id}`, 'PATCH', {
      completed
		}).then(() => this.getTasks(this.state.userId));
  }
	componentWillMount() {
    const userId = store.getState().signin.user.id;
		this.getTasks(userId);
		this.props.updateTitle(this.title);
	}
	render() {
		const { tasks } = this.state;
		if (tasks.length) {
		return (
			<ul className="task-list incomplete">
			{tasks.map((task, index) =>
				<li key={task.id}>
					<form
						id={`task_${task.id}`}
						className="task-update-form container"
						action=""
						onSubmit={e => e.preventDefault()}
					>
						<input
							name={`complete_${task.id}`}
							id={`complete_${task.id}`}
							type="checkbox"
							onChange={e => this.setCompleted(task, e)}
							defaultChecked={task.completed}
						/>
						<label
							htmlFor={`complete_${task.id}`}
							title={`Mark ${task.completed ? 'not completed' : 'completed'}`}>
						</label>
						<input
							type="text"
							key={`tt_${task.id}`}
							className={`task-title ${task.completed ? 'completed' : ''}`}
							defaultValue={`${task.title}`}
							onBlur={this.updateTask.bind(this, task)}
							required
							placeholder="Task title"
							maxLength="80"
							minLength="3"
							title='Edit to-do title'
						/>
						<span className="hint">Title must contain at least 3 characters: latin letters and/or numbers</span>
						<textarea
							type="text"
							key={`td_${task.id}`}
							className="task-desc"
							defaultValue={task.description}
							onBlur={this.updateTask.bind(this, task)}
							minLength="3"
							maxLength="80"
							placeholder="No description"
							title='Edit to-do description'
						/>
						<button
							className="delete-task"
							onClick={this.deleteTask.bind(this, task)}
							title='Delete to-do'
						>
							&#x2573;
					</button>
					</form>
				</li>
			)}
		</ul>
		);
	} else {
		return <p className="center">All tasks are completed!</p>
	}
	}
}