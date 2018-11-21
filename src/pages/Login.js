
import { request } from 'services/request';
import { store } from 'store';
import { NavLink, Redirect } from 'react-router-dom';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.title = "Login";
  }
  login = (form) => {
    const login = document.querySelector('#login').value,
      password = document.querySelector('#password').value;

    request(`users?login=${login}&password=${password}`)
      .then(user => {
        if (user) {
          store.dispatch({ type: 'LOG_IN', user: user[0] });
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(user[0]));
        } else {
          form.classList.add('animated', 'shake');
          setTimeout(() => form.classList.remove('animated', 'shake'), 300);
        }
      });
  }
  componentWillMount(){
      this.props.updateTitle(this.title);
  }
  render() {
    return (
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); this.login(e.target); }}>
        <div className="container">
          <label htmlFor="">Login</label>
          <input
            type="text"
            placeholder="Login"
            id="login"
            required
            maxLength="40"
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
          <button type="submit">Log in</button>
          <p className="center"><NavLink to="/register">Create account</NavLink></p>
        </div>
      </form>
    );      
  }
}
