import React from 'react';
import './navigation.scss';
import { NavLink } from './NavLink';

export const Navigation = (props) => (
    <nav className={ props.scope || `main-nav` }>
        <ul>
            <NavLink title="NavLink" />
            <NavLink title="NavLink" />
            <NavLink title="NavLink" />
            <NavLink title="NavLink" />
        </ul>
    </nav>
);