import { NavLink } from 'react-router-dom';
import { store } from 'store';
import './navigation.scss';

class Logout extends Component {
  logout() {  
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('user');
    store.dispatch({ type: 'LOG_OUT' });
  }
  render() {
    return (
        <a className="btn" onClick={this.logout.bind(this)}>&#9758; Logout</a>
    )
  }
};

export class Navigation extends Component {
  constructor() {
    super();
    this.state = { menuActive: '' }
  }
  toggleMenu = () => {
    console.log(this.state.menuActive);
    if (this.state.menuActive) {
      this.setState({ menuActive: '' })
    }
    else {
      this.setState({ menuActive: 'active' })
    }
  }
  handleClickOutside = (event) => {
    console.log(event.target, this.refs.menuBbn)
    if (this.refs.menuBtn && !this.refs.menuBtn.contains(event.target)) {
      this.setState({menuActive: ''})
    }
  }
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }
  render() {
    const user = store.getState().signin.user;
    return (
      <nav className="main-nav">
        <b className="logo">&#8986; logo</b>
        <h1 className="page-title">{ this.props.title }</h1>
        {
          user ?<button
          ref="menuBtn"
          className={`btn--menu ${this.state.menuActive}`} 
          onClick={ this.toggleMenu }
        >
          <span></span>
          <span></span>
          <span></span>
        </button> : ''}
        {
          user ? //if logged in
          (
            <ul>
              <li>
                <NavLink
                  activeClassName="active"
                  className="btn"
                  to="/to-dos"
                >
                &#9745;  My to-dos
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="btn"
                  to="/to-dos/active"
                >
                &#9744;  Active
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="btn"
                  to="/account"
                >
                  &#9812; { user.displayName }
                </NavLink>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          )
          :
          (
            ''
          )
        }
      </nav>
    )
  }
}