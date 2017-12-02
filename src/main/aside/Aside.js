

import './aside.scss';
import {Navigation} from '../../navigation';
export class Aside extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <Navigation scope="side-nav"/>
            </aside>
        )
    }

}