import { TabContent, Tab, Tablink, TabNav } from './';

import './tabs.scss';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: props.active || 0 };
  }

  clickTab = (id) => {
    this.setState({ id });
    setTimeout(() => {if(this.props.select) this.props.select(this.state.id + 1)}, 0);    
  }
componentDidMount(){  
  this.props.select(this.state.id + 1);
}
componentWillReceiveProps(props){
  this.setState({id: props.active})
}
  render() {
    const tabs = this.props.children
      .filter(child => child.type === Tab)
      .reduce((prev, next) => [...prev, ...next.props.children], []);
    // tabs = [{Tablink}, {TabContent}, {Tablink}, {TabContent}]

    const navList = tabs.filter(tab => tab.type === Tablink);
    // [{Tablink}, {Tablink}]
    const tabContents = tabs.filter(tab => tab.type === TabContent);
    // [{TabContent}, {TabContent}]

    return (
      <div className="tabs">
        <TabNav
          select={this.clickTab}
          activeIndex={this.state.id}
        >
          {navList}
        </TabNav>
        {tabContents[this.state.id]}
      </div>
    );
  }
}
