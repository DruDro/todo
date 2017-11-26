import React from 'react';
import './navigation.scss';
import { NavLink } from './NavLink';

export const Navigation = (props) => (
    <nav className={ props.scope || `main-nav` }>
        <ul>
            <NavLink href="/home" title="Home" />
            <NavLink href="/products"  title="Products" />
            <NavLink href="/contacts"  title="Contacts" />
        </ul>
    </nav>
);