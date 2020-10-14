// import Event from "./event.js";
import Component from "./component.js"

class Home extends Component {
  constructor() {
    super();
    this.init();
  }

  clickButton() {
    alert("Something happened");
  }

  init() {
    console.log('Home ', this);
  }

  created() {
    let button = this.$el("mySuperButton");
    button.addEventListener("click", () => {
      this.clickButton();
    });
  }

  render() {
    console.log("render");
    this.renderResult = `
    <h1> Home </h1> <br/>
    <button data-hash=${this.hash} data-ref="mySuperButton">Click Event</button>
    `;
  }


}

export default Home;
