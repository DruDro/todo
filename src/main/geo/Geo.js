export class Geo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clName: ""
    };
  }

  onClick = () => {
      this.setState({clName: "active disabled"});

    const success = position => {
      this.setState({lat: position.coords.latitude, long: position.coords.longitude})
    };
    const error = error => `fail`;
    navigator
      .geolocation
      .getCurrentPosition(success, error);

  };
  render() {
    return (
      <div className="table-div">
        <button
          type="button"
          className={`btn btn-toggle ${this.state.clName}`}
          onClick={this.onClick}>
          Show coords
        </button>
        <span className="toggleText">{`latitude is ${this.state.lat}° & longitude is ${this.state.long}°`}</span>
      </div>
    );
  }
}