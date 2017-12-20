import { TabContent, Tab, Tablink, TabNav } from './';
import './tabs.scss';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.selectedIndex - 1
    };
  }

  clickTab = (id) => {
    this.setState({ id });
  }

  render() {
    const tabs = this.props.children
      .filter(child => child.type === Tab)
      .reduce((prev, next) => [...prev, ...next.props.children], []);

    const navList = tabs.filter(tab => tab.type === Tablink);
    const tabContents = tabs.filter(tab => tab.type === TabContent);

    return (
      <section className="tab">
        <TabNav
          activeIndex={this.state.id}
          select={this.clickTab}
        >
          {navList}
        </TabNav>

        {tabContents[this.state.id]}
      </section>
    );
  }
}
Tabs.propTypes = { selectedIndex: PropTypes.number }
Tabs.defaultProps = { selectedIndex: 1 }