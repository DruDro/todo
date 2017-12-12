export const Persons = ({ users, clickHandler, userName, userPosts }) => (
  <section className="section-users">
    <ul className="users">
      {
        users.map(user => <li key={ user.id } onClick={ () => clickHandler(user) }>{user.name}</li>)
      }
    </ul>
    <section className="user-posts">
      <header>
        <h2>{`${userName} Posts`}</h2>
      </header>
      <main>{userPosts.map(post => <article key={post.id}>{post.body}<hr /></article>)}</main>
    </section>
  </section>
);
