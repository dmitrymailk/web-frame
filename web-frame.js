import Router from "./router.js";
import Home from "./home.js";
import About from "./about.js";

class WebFrame {
  constructor(mountDiv) {
    this.mountDiv = mountDiv || "body";
    this.router = {};
    this.init();
  }
  init() {
    this.router = new Router([
      {
        routeName: "/home",
        data: () => new Home(),
      },
      {
        routeName: "/about",
        data: () => new About(),
      },
    ]);

    this.setHistoryPath();
  }

  setHistoryPath() {
    let currentHash = window.location.hash.replace("#!", "");
    this.router.emit("pagerefresh", { path: currentHash });
  }
}

export default WebFrame;
