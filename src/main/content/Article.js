import './article.scss';
import {Persons} from '../Persons';
import {Numbers} from '../../numbers';
import {Tabs, TabContent, Tab, Tablink, TabNav} from '../../tabs';
import {TaskList, Tasks, Day, Daylink, TaskNav} from '../../taskList';
import {Form} from '../../form';
import {ButtonToggleText} from '../button';
import {Geo} from '../geo';
import {Timer} from '../Timer';
import {Lifecycle} from '../lifecycle/parent';

export class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      preloader: false,
      userPosts: [],
      userName: ''
    };
  }
  getUsers = () => {
    this.setState({preloader: true, users: []});

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => {
        this.setState({users, preloader: false});
        console.table(users);
      });
  }

  showPosts = (user) => {
    this.setState({userPosts: []});
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => response.json())
      .then((posts) => {
        this.setState({userPosts: posts, userName: user.name});
      });
  }

  render() {
    const {users, preloader, userPosts, userName} = this.state;
    return (

      <article className="main__content">
      <h2>Random Numbers</h2>
        <Numbers from={7} to={14} odd/>
        <h2>Toggle Button</h2>
        <ButtonToggleText
          toggleText="This button implements 2 tasks: 'toggle button class .active' &amp; 'toggle button text and the related text-box'"/>
          <h2>Show Geo-Position</h2>
        <Geo/>
        <h2>Fetch Users</h2>
        <button onClick={this.getUsers}>Get users</button>
        <Persons
          userName={userName}
          userPosts={userPosts}
          users={users}
          clickHandler={this.showPosts}/> 
        {preloader && <span>Loading...</span>}
        
        <h2>Lifecycle Timer</h2>
        <Timer />
        <h2>Lifecycle Counter-Painter</h2>
        <Lifecycle />
        <h2>Tabs</h2>
        <Tabs selectedIndex={1}>
          <Tab>
            <Tablink title={'Tab 1'}/>
            <TabContent>
              <ol>
                <li>
                  <a href="#" className="done">task 1</a>
                </li>
                <li>
                  <a href="#" className="open">task 2</a>
                </li>
                <li>
                  <a href="#" className="done">task 3</a>
                </li>
              </ol>
            </TabContent>
          </Tab>

          <Tab>
            <Tablink title={'Tab 2'}/>
            <TabContent>
              <ol>
                <li>
                  <a href="#" className="done">task 1</a>
                </li>
                <li>
                  <a href="#" className="open">task 2</a>
                </li>
              </ol>
            </TabContent>
          </Tab>
        </Tabs>
        <h2>Tasks</h2>
        <TaskList selectedIndex={(new Date()).getDay()}>
          <Day>
            <Daylink title={'Mon'}/>
            <Tasks>
              <ol>
                <li>
                  <a href="#" className="done">task 1</a>
                </li>
                <li>
                  <a href="#" className="open">task 2</a>
                </li>
                <li>
                  <a href="#" className="done">task 3</a>
                </li>
              </ol>
            </Tasks>
          </Day>
          <Day>
            <Daylink title={'Tue'}/>
            <Tasks>
              <ol>
                <li>
                  <a href="#" className="done">task 1</a>
                </li>
                <li>
                  <a href="#" className="open">task 2</a>
                </li>
                <li>
                  <a href="#" className="done">task 3</a>
                </li>
              </ol>
            </Tasks>
          </Day>
          <Day>
            <Daylink title={'Wed'}/>
            <Tasks>
              <ol>
                <li>
                  <a href="#" className="done">task 1</a>
                </li>
                <li>
                  <a href="#" className="open">task 2</a>
                </li>
                <li>
                  <a href="#" className="done">task 3</a>
                </li>
              </ol>
            </Tasks>
          </Day>
          <Day>
            <Daylink title={'Tue'}/>
            <Tasks>
              <ol>
                <li>
                  <a href="#" className="done">task 1</a>
                </li>
                <li>
                  <a href="#" className="open">task 2</a>
                </li>
                <li>
                  <a href="#" className="done">task 3</a>
                </li>
              </ol>
            </Tasks>
          </Day>
          <Day>
            <Daylink title={'Fri'}/>
            <Tasks>
              <ol>
                <li>
                  <a href="#" className="done">task 1</a>
                </li>
                <li>
                  <a href="#" className="open">task 2</a>
                </li>
                <li>
                  <a href="#" className="done">task 3</a>
                </li>
              </ol>
            </Tasks>
          </Day>
          <Day>
            <Daylink title={'Sat'}/>
            <Tasks>
              <ol>
                <li>
                  <a href="#" className="done">task 1</a>
                </li>
                <li>
                  <a href="#" className="open">task 2</a>
                </li>
                <li>
                  <a href="#" className="done">task 3</a>
                </li>
              </ol>
            </Tasks>
          </Day>
          <Day>
            <Daylink title={'Sun'}/>
            <Tasks>
              <ol>
                <li>
                  <a href="#" className="done">task 1</a>
                </li>
                <li>
                  <a href="#" className="open">task 2</a>
                </li>
                <li>
                  <a href="#" className="done">task 3</a>
                </li>
              </ol>
            </Tasks>
          </Day>
        </TaskList>
        <h2>Form</h2>
        <Form />
      </article>
    );
  }
}
