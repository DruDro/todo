import React from 'react';

import { Header } from './header'; 
import { Main } from './main'; 
import { Footer } from './footer'; 
import { Error } from './error'; 
import 'app.scss';

import {
    Navigation
} from './Navigation';

export const App = (
    <div>
        <Header />
        <Error />
        <Main />
        <Footer />
    </div>
);
