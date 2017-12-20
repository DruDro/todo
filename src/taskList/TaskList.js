import { Tasks, Day, Daylink, TaskNav } from './';

export class TaskList extends React.Component {
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
      .filter(child => child.type === Day)
      .reduce((prev, next) => [...prev, ...next.props.children], []);

    const navList = tabs.filter(tab => tab.type === Daylink);
    const tasks = tabs.filter(tab => tab.type === Tasks);

    return (
      <section className="tab">
        <TaskNav
          activeIndex={this.state.id}
          select={this.clickTab}
        >
          {navList}
        </TaskNav>

        {tasks[this.state.id]}
      </section>
    );
  }
}
TaskList.propTypes = { selectedIndex: PropTypes.number }
TaskList.defaultProps = { selectedIndex: 1 }