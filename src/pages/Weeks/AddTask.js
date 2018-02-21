
import { request } from 'services/request';

const moment = require('moment');

export class AddTask extends Component {
    constructor(props) {
        super(props);
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
        })
            .then(() => this.props.getTasks(this.props.userId))
            .then(() => form.reset());
        
    }
    render() {
        return (
            <form id="addTask" className="task-add-form" onSubmit={e => {e.preventDefault(); this.addTask()}}>
                <fieldset>
                    <legend>Add a new to-do for {moment(this.props.date,'D-M-YYYY').format('D.M.YYYY')}</legend>
                    <div className="container">
                        <label htmlFor="">To-do</label>
                        <input 
                            type="text" 
                            id="title" 
                            required
                            placeholder="Title"
                            maxLength="80"
                            minLength="3"
                        />
                        <label htmlFor="">To-do description
                        </label>
                        <textarea 
                            type="text" 
                            id="description"
                            placeholder="Description"
                            maxLength="120"
                            minLength="3"
                        />
                        <button 
                            type="submit" 
                        >
                            Add to-do
                        </button>
                    </div>
                </fieldset>
            </form>
        );
    }
}