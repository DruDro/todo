
import './main.scss';


import {Aside} from './aside';
import {Article} from './content';

export class Main extends React.Component {
    render() {
        return (
            <section className="main">
                <div className="container">
                    <Aside/>
                    <Article/>
                </div>
            </section>
        )
    }
}