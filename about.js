import Event from "./event.js";

class About extends Event {
  constructor() {
    super();
    console.log("component created");
    this.renderResult = ``;

    this.init();
  }

  init() {
    this.on("created", () => {
      console.log("about created");
    });
  }

  render() {
    console.log("render");
    this.renderResult = `
    <h1> About </h1> <br/>
    `;
  }
}

export default About;
