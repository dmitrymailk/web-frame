import Event from "./event.js";

class Home extends Event {
  constructor() {
    super();
    console.log("component created");

    this.hash = this.uuidv4();
    this.renderResult = ``;

    this.init();
  }

  clickButton() {
    alert("Something happened");
  }

  init() {
    this.on("created", () => {
      let button = this.$el("mySuperButton");
      console.log("created home", button);
      button.addEventListener("click", () => {
        this.clickButton();
      });
    });
  }

  render() {
    console.log("render");
    this.renderResult = `
    <h1> Home </h1> <br/>
    <button data-hash=${this.hash} data-ref="mySuperButton">Click Event</button>
    `;
  }

  $el(ref) {
    return document.querySelector(
      `*[data-ref='${ref}'][data-hash='${this.hash}']`
    );
  }
}

export default Home;
