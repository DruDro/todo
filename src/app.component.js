import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { store } from 'store';
import { Header } from './partials/header/';
import { Footer } from './partials/footer';
import { Weeks, Incomplete, Login, Register, Account } from './pages';
import './app.scss';

const moment = require('moment');

export class App extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    if(localStorage.getItem('loggedIn') === 'true'){
      const user = JSON.parse(localStorage.getItem('user'));
      store.dispatch({type:'LOG_IN', user })
    }
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    return (
      <section className="wrapper">
        <Header />
        <main className="main">
            <Switch>
              <Route exact path="/" render={() => {
                if (store.getState().signin.loggedIn) {
                  return <Redirect to="/to-dos" />
                } else {
                  return <Redirect to="/login" />
                }
              }} />
              <Route exact path="/login" render={() => {
                if (store.getState().signin.loggedIn) {
                  return <Redirect to="/to-dos" />
                } else {
                  return <Login />
                }
              }} />
              <Route exact path="/register" render={() => {
                if (store.getState().signin.loggedIn) {
                  return <Redirect to="/to-dos" />
                } else {
                  return <Register />
                }
              }} />
              <Route exact path="/account" render={() => {
                if (store.getState().signin.loggedIn) {
                  return <Account />
                } else {
                  return <Redirect to="/login" />
                }
              }} />
              <Route exact path="/to-dos" render={() => {
                if (store.getState().signin.loggedIn) {
                  return <Redirect to={`/to-dos/${moment().format('D-M-YYYY')}`} />
                } else {
                  return <Redirect to="/login" />
                }
              }} />
              <Route exact path="/to-dos/active" render={(props) => {
                if (store.getState().signin.loggedIn) {
                  return <Incomplete {...props} />
                } else {
                  return <Redirect to="/login" />
                }
              }} />
              <Route exact path="/to-dos/:date" render={(props) => {
                if (store.getState().signin.loggedIn) {
                  return <Weeks {...props} />
                } else {
                  return <Redirect to="/login" />
                }
              }} />
            </Switch>
        </main>
        <Footer />
      </section>
    );
  }
}
