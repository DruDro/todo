
import './aside.scss';
import { Navigation} from '../../navigation';

export const Aside = () => (
    <aside className="sidebar">
        <Navigation scope="side-nav" navlinks={ ['Home', 'Products', 'Contucts'] } />
    </aside>
);