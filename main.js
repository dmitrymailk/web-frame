import Component from "./component.js";
import ReusableComponent from "./reusable-component.js";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    this.renderResult = `
    <h1> Index </h1> <br/>
    
    ${["this", "is my", "props", " awesome"]
      .map((item) => {
        let reusable = new ReusableComponent({ text: item });
        return reusable.renderResult;
      })
      .join("")}
    `;
  }
}

export default Main;
