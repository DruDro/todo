import React from 'react';
import './navigation.scss';
import { NavLink } from './NavLink';

export const Navigation = (props) => (
    <nav className={ props.scope || `main-nav` }>
        <ul>
            <NavLink title="Home" />
            <NavLink title="Products" />
            <NavLink title="Contacts" />
        </ul>
    </nav>
);