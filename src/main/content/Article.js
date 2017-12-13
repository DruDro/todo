import './article.scss';
import { Counter } from '../Counter';
import { Persons } from '../Persons';
import { Numbers } from '../../numbers';
import { Tabs, TabContent, Tab, Tablink, TabNav } from '../../tabs';
import { ButtonToggleText } from '../button';
import { Geo } from '../geo';


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
    this.setState({ preloader: true, users: [] });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => {
        this.setState({ users, preloader: false });
        console.table(users);
      });
  }

  showPosts = (user) => {
    this.setState({ userPosts: [] });
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => response.json())
      .then((posts) => {
        this.setState({
          userPosts: posts,
          userName: user.name
        });
      });
  }

  render() {
    const { users, preloader, userPosts, userName } = this.state;
    return (

      <article className="main__content">
        <Numbers from={7} to={14} odd />
        <ButtonToggleText
          toggleText="This button implements 2 tasks: 'toggle button class .active' &amp; 'toggle button text and the related text-box'"
        />
        <Geo />
        <Counter />

        <button onClick={this.getUsers}>Get users</button>
        <Persons
          userName={userName}
          userPosts={userPosts}
          users={users}
          clickHandler={this.showPosts}
        /> {preloader && <span>Loading...</span>}
        <Tabs selectedIndex={(new Date()).getDay()}>
          <Tab>
            <Tablink title={'Mon'} />
            <TabContent>
              <ol>
                <li><a href="#" class="done">task 1</a></li>
                <li><a href="#" class="open">task 2</a></li>
                <li><a href="#" class="done">task 3</a></li>
              </ol>
            </TabContent>
          </Tab>

          <Tab>
            <Tablink title={'Tue'} />
            <TabContent>
              <ol>
                <li><a href="#" class="done">task 1</a></li>
                <li><a href="#" class="open">task 2</a></li>
              </ol>
            </TabContent>
          </Tab>

          <Tab>
            <Tablink title={'Wed'} />
            <TabContent>
              <ol>
                <li><a href="#" class="done">task 1</a></li>
                <li><a href="#" class="open">task 2</a></li>
                <li><a href="#" class="done">task 3</a></li>
              </ol>
            </TabContent>
          </Tab>

          <Tab>
            <Tablink title={'Thu'} />
            <TabContent>
              <ol>
                <li><a href="#" class="done">task 1</a></li>
                <li><a href="#" class="open">task 2</a></li>
              </ol>
            </TabContent>
          </Tab>

          <Tab>
            <Tablink title={'Fri'} />
            <TabContent>
              <ol>
                <li><a href="#" class="done">task 1</a></li>
                <li><a href="#" class="open">task 2</a></li>
                <li><a href="#" class="done">task 3</a></li>
              </ol>
            </TabContent>
          </Tab>

          <Tab>
            <Tablink title={'Sat'} />
            <TabContent>
              <ol>
                <li><a href="#" class="done">task 1</a></li>
                <li><a href="#" class="open">task 2</a></li>
              </ol>
            </TabContent>
          </Tab>

          <Tab>
            <Tablink title={'Sun'} />
            <TabContent>
              <ol>
                <li><a href="#" class="done">task 1</a></li>
                <li><a href="#" class="open">task 2</a></li>
              </ol>
            </TabContent>
          </Tab>
        </Tabs>

      </article>
    );
  }
}
