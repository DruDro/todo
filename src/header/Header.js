import React from 'react';
import {Navigation} from '../navigation';
import {Greeting} from './greeting';
import './header.scss';
export const Header = () => (
    <header className="header">
        <div className="container">
            <Greeting /> {/*name can be passed*/}
            <Navigation />
        </div>
    </header>
);