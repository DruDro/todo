
import { request } from 'services/request';
import { store } from 'store';

export class Account extends Component {
  constructor(props){
    super(props);
    this.title = "Account";
  }
  update(form) {
    const oldPassword = document.querySelector('#password').value,
      newPassword = document.querySelector('#newPassword').value,
      displayName = document.querySelector('#displayName').value;

    if(oldPassword === store.getState().signin.user.password){
      request(`users/${store.getState().signin.user.id}`, 'PATCH', {
        displayName,
        password: newPassword
      })
        .then((user) => {
          if (user.createdAt) {
            store.dispatch({ type: 'LOG_IN', user });
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('user', JSON.stringify(user));
          }
        });
    } else {
        form.classList.add('animated', 'shake');
        setTimeout(() => form.classList.remove('animated', 'shake'), 300);
      }
  }
  componentWillMount(){
      this.props.updateTitle(this.title);
  }
  render() {
    return (
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); this.update(e.target); }}>
        <div className="container">
          <label htmlFor="">Display name</label>
          <input
            type="text"
            placeholder="Display name"
            id="displayName"
            required
            maxLength="40"
            minLength="3"
            defaultValue={store.getState().signin.user.displayName}
          />
          <label htmlFor="">Old password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
            maxLength="20"
            minLength="6"
          />
          <label htmlFor="">New password</label>
          <input
            type="password"
            placeholder="New password"
            id="newPassword"
            required
            maxLength="20"
            minLength="6"
          />
          <button type="submit">Save changes</button>
        </div>
      </form>
    );
  }
}
