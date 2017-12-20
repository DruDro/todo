const roles = ['admin', 'quest', 'user'];

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.fields = [
      {
        label: 'email',
        reg: /^\w+@\w+\.[a-z]{2,}$/
      }, {
        label: 'name',
        reg: /^[^ ]{3,20}$/
      }, {
        label: 'surname',
        reg: /^[^ ]{3,20}$/
      }, {
        label: 'password',
        reg: /^[^ ]{6,20}$/
      }
    ];

    this.state = {};
    this
      .fields
      .forEach(field => this.state[field.label] = '');
  }

  handleField = (event) => {
    const target = event.target;

    this.setState({
      [target.name]: { value: target.value }
    });
  }

  render() {
    return (
      <form>

        <input type="submit" value="Create" />
        <ul>
          {this
            .fields
            .map(field => (
              <li key={Math.floor(Math.random()*100)}>
                {
                  <input
                    type="text"
                    pattern={field.reg}
                    placeholder={`${field.label}`}
                  />
                }
              </li>
            ))}
        </ul>
      </form>
    );
  }
}
