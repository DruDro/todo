
import './article.scss';
import {Counter} from '../Counter';
import {Persons} from '../Persons';
import {Numbers} from '../../numbers';
import {Tabs} from '../../tabs';



const tabs = [
    {id: 0, title: 'Tab 1', content: 'Some text is here'},
    {id: 1, title: 'Tab 2', content: 'Another content'},
    {id: 2, title: 'Tab 1', content: 'Third text'}
  ];
export class Article extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            preloader: false
        };
    }
    getUsers = () => {
        this.setState({preloader: true, users: []});

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users, preloader: false}));
    }
    showEmail(user) {
        alert(`${user.email}: ${user.phone}`);
    }
    render() {
        const {users, preloader} = this.state;
        return (

            <article className="main__content">
                <Numbers from={7} to={14} odd/>
                <Counter/>

                <button
                    onClick={this
                    .getUsers
                    .bind(this)}>Get users</button>
                <Persons users={users} clickHandler={this.showEmail}/> {preloader && <span>Loading...</span>}
                <Tabs tabs={tabs}/>
            </article>
        )
    }
}