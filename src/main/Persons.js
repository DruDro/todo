export const Persons = ({users, clickHandler, userName, userPosts}) => (
  <section className="section-users">
    <div className="users">
      <header>
        <h3>Users</h3>
      </header>
      <ul>
        {users.map(user => <li key={user.id} onClick={() => clickHandler(user)}>{user.name}</li>)
}
      </ul>
    </div>
    <section className="user-posts">
      <header>
        <h3>{ `${userName ? `${userName}` : 'User'}'s Posts`}</h3>
      </header>
      <main>{userPosts.map(post => <article key={post.id}>{post.body}<hr color="#eee" /></article>)}</main>
    </section>
  </section>
);
