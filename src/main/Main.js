    import React from 'react';
    import './main.scss';

    import {Aside} from './aside';
    import {Article} from './content';

    export const Main = () => (
        <section className="main">
            <div className="container">
                <Aside/>
                <Article/>
            </div>
        </section>
    );