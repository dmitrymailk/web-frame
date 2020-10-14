import Component from "./component.js";

class About extends Component {
  constructor() {
    super();
  }

  created() {
    console.log("about created");
  }

  render() {
    this.renderResult = `
    <h1> About </h1> <br/>
    `;
  }
}

export default About;
