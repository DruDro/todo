import React from 'react';
import './aside.scss';export const Aside = () => (
    <aside className="sidebar">
        <Navigation scope="side-nav" navlinks={ ['Home', 'Products', 'Contucts'] } />
    </aside>
);