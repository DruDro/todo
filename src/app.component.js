import React from 'react';

import './app.scss';
import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';
// import { Msg } from './msg';


export const App = (
  <div className="wrapper">
    <Header />
    { /* <Msg type="warning" msg="Warning" /> */}
    <Main />
    <Footer />
  </div>
);
