import React from 'react';
import {Navigation} from '../navigation';
import './header.scss';
export const Header = () => (
    <header className="header">
        <div className="container">
            <Navigation/>
        </div>
    </header>
);