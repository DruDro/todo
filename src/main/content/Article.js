import './article.scss';
import {Counter} from '../Counter';
import {Persons} from '../Persons';
import {Numbers} from '../../numbers';
import {Tabs} from '../../tabs';
import {ButtonToggleText} from '../button';
import {Geo} from '../geo';

const tabs = [
    {
        id: 0,
        title: 'Tab 1',
        content: 'Some text is here'
    }, {
        id: 1,
        title: 'Tab 2',
        content: 'Another content'
    }, {
        id: 2,
        title: 'Tab 1',
        content: 'Third text'
    }
];
export class Article extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            preloader: false,
            userPosts:[]
        };
    }
    getUsers = () => {
        this.setState({preloader: true, users: []});

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({users, preloader: false});

                console.table(users);
            });
    }

    showPosts = (user) => {

        this.setState({userPosts:[]});
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then(response => response.json())
            .then(posts => {
                this.setState({userPosts:posts});
            });

    }

    render() {
        const {users, preloader, userPosts} = this.state;
        return (

            <article className="main__content">
                <Numbers from={7} to={14} odd/>
                <ButtonToggleText
                    toggleText="This button implements 2 tasks: 'toggle button class .active' &amp; 'toggle button text and the related text-box'"/>
                <Geo/>
                <Counter/>

                <button
                    onClick={this
                    .getUsers
                    .bind(this)}>Get users</button>
                <Persons userPosts={userPosts} users={users} clickHandler={this.showPosts}/> {preloader && <span>Loading...</span>}
                <Tabs tabs={tabs}/>
            </article>
        )
    }
}