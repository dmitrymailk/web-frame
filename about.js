import Component from "./component.js"

class About extends Component {
  constructor() {
    super();
    this.renderResult = ``;

    this.init();
  }

  init() {

  }

  created() {
    console.log("about created");
  }

  render() {
    console.log("render");
    this.renderResult = `
    <h1> About </h1> <br/>
    `;
  }
}

export default About;
