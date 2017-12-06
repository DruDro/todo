
import './navigation.scss';
import {NavLink} from './NavLink';


export class Navigation extends React.Component {
    render() {
        return (
            <nav className={this.props.scope || `main-nav`}>
                <ul>
                    {this.props.navlinks.map(navlink =>                     
                        <li key={ Math.floor(Math.random() * 1000000 ) } >
                            <NavLink href={`/${navlink}`} title={`${navlink}`}/>
                        </li>
                    )}
                </ul>
            </nav>
        );

    };
}