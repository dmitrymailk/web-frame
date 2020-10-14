import Event from "./event.js";
class Component extends Event {
  constructor(props = {}) {
    super();
    this.hash = this.uuidv4();
    this.renderResult = ``;

    this.state = {};
    this.props = props;

    this.initComponent();
  }

  initComponent() {
    this.on("created", () => this.created());
    this.on("updated", () => this.updated());
    this.render();
  }

  setState(key, data) {
    // console.log("set state", key, data, this.state, this.state[key]);
    if (typeof this.state[key] !== "undefined") {
      this.state[key] = data;
      this.emit("updated", this);
    }
  }

  created() {
    console.log("created component");
  }

  updated() {
    this.render();
  }

  $el(ref) {
    return document.querySelector(
      `*[data-ref='${ref}'][data-hash='${this.hash}']`
    );
  }
}

export default Component;
