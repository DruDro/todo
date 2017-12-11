import './button.scss';

export class ButtonToggleText extends React.Component {
  constructor(props) {
    super(props);
    this.toggleText = props.toggleText;
    this.state = {
      clName: "",
      text:"Show"
    }
  }
  onClick = () => {
    if (this.state.clName == "") {
        this.setState({clName: "active", text:"Hide"});
    } else {
      this.setState({clName: "", text:"Show"});
    }
  }
  render() {
    return (
      <div className="table-div">
        <button 
          type="button" 
          className={ `btn btn-toggle ${ this.state.clName }` } 
          onClick={ this.onClick } >
          {this.state.text}
        </button>
        <span className="toggleText">{ this.toggleText }</span>
      </div>
    );
  }
}