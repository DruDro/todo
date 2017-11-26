import React from 'react';
import './article.scss';
import {Counter} from '../Counter';
import {Persons} from '../Persons';

import {Numbers} from '../../numbers';

export class Article extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            preloader: false
        };
    }
    getUsers = () => {
        this.setState({loading: true, users: []});

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users, loading: false}));
    }
    showEmail(user) {
        alert(` ${user.email}: ${user.phone}`);
    }
    render() {
        const {users, loading} = this.state;
        return (

            <article className="main__content">
                <Numbers from={7} to={14} odd/>
                <Counter/>

                <button
                    onClick={this.getUsers.bind(this)}>Get users</button>
                <Persons
                    users={users}
                    clickHandler={this.showEmail} />
                { loading && <span>Loading...</span> }
            </article>
        )
    }
}