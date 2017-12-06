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
        this.setState({
            preloader: true, 
            users: []
        });

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState(
                    { 
                        users, 
                        preloader: false 
                    }
                );

                console.table(users);
            });
    }

    showEmail(user) {
        alert(
`${user.name}:
E-mail: ${user.email}
Phone: ${user.phone}`
        );
    }

    render() {
        const {users, preloader} = this.state;
        return (

            <article className="main__content">
                <Numbers 
                    from={7} 
                    to={14} 
                    odd
                />

                <Counter/>

                <button
                    onClick={ this.getUsers } >
                    Get users
                </button>
                <Persons users={ users } clickHandler={ this.showEmail }/> { preloader && <span>Loading...</span> }
            </article>
        )
    }
}