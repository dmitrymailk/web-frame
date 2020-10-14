import Component from "./component.js";

class ReusableComponent extends Component {
  constructor(props) {
    super(props);
    // this.props = props;

    // console.log(props);
  }

  render() {
    this.renderResult = `
    <b> Reusable component ${this.props.text}</b> <br/>
    `;
    console.log(this.props);
  }
}

export default ReusableComponent;
