import Router from "./router.js";
import Event from "./event.js";
// components
import Home from "./home.js";
import About from "./about.js";
import Main from "./main.js";

class WebFrame extends Event {
  constructor(mountDiv) {
    super();
    this.mountDivName = mountDiv || "body";
    this.mountDiv = {};
    this.router = {};
    this.init();
  }
  init() {
    this.mountDiv = this.$el(this.mountDivName);
    this.on("rendered", this.rendered.bind(this));
    this.render();
  }

  rendered() {
    this.router = new Router([
      {
        routeName: "/home",
        data: Home,
      },
      {
        routeName: "/about",
        data: About,
      },
      {
        routeName: "/",
        data: Main,
      },
    ]);
    this.setHistoryPath();
  }

  setHistoryPath() {
    let currentHash = window.location.hash.replace("#!", "");
    this.router.emit("pagerefresh", { path: currentHash });
  }

  render() {
    this.mountDiv.innerHTML = `
    <a href="/">index</a>
    <a href="/home">home</a>
    <a href="/about">about</a>
    <div class="router-view"></div>
    `;
    this.emit("rendered");
  }

  $el(elemName) {
    return document.querySelector(`${elemName}`);
  }
}

export default WebFrame;
