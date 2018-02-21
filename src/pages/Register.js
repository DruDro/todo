
import { request } from 'services/request';
import { NavLink } from 'react-router-dom';
import { store } from 'store';

const moment = require('moment');

export class Register extends Component {
  register(form) {
    const login = document.querySelector('#login').value,
      password = document.querySelector('#password').value,
      displayName = document.querySelector('#displayName').value;

    request('users')
      .then(users => users.filter(user => user.login === login))
      .then((users) => {
        if (!users.length) {
          request('users/', 'POST', {
            createdAt: moment().format('D-M-YYYY'),
            displayName,
            login,
            password
          })
            .then((user) => {
              if (user.createdAt) {
                store.dispatch({ type: 'LOG_IN', user });
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('user', JSON.stringify(user));
              } else {
                form.classList.add('animated', 'shake');
                setTimeout(() => form.classList.remove('animated', 'shake'), 300);
              }
            });
        } else {
          alert(`A user with login "${login}" already exists`)
        }
      });
  }
  render() {
    return (
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); this.register(e.target); }}>
        <div className="container">
          <label htmlFor="">Display name</label>
          <input
            type="text"
            placeholder="Display name"
            id="displayName"
            required
            maxLength="40"
            minLength="3"
          />
          <label htmlFor="">Login</label>
          <input
            type="text"
            placeholder="Login"
            id="login"
            required
            maxLength="20"
            minLength="3"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
            maxLength="20"
            minLength="6"
          />
          <button type="submit">Register</button>
          <p className="center"><NavLink to="/login">Login</NavLink></p>
        </div>
      </form>
    );
  }
}
