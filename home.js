// import Event from "./event.js";
import Component from "./component.js"

class Home extends Component {
  constructor() {
    super();

    this.state = {
      increment: 0
    }

    this.button = {}
  }

  clickButton() {
    console.log('increment');
    let oldIncrement = this.state.increment
    oldIncrement += 1;
    this.setState('increment', oldIncrement)
  }


  created() {
    this.button = this.$el("mySuperButton");
    this.button.addEventListener("click", () => {
      this.clickButton();
    });
  }

  render() {
    console.log("render", this);
    this.renderResult = `
    <h1> Home </h1> <br/>
    <button data-hash=${this.hash} data-ref="mySuperButton">Click Event</button>
    <h2>Increment: ${this.state.increment} </h2>
    `;
  }

}

export default Home;
