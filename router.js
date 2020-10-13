import Link from "./link.js";
import Event from "./event.js";
import RouterView from "./router-view.js";

class Router extends Event {
  constructor(linkList) {
    super();
    this.linkList = linkList;
    this.routers = {};
    this.init();
  }

  init() {
    this.getAllLinks();
    this.on("update", (e) => this.update(e));

    this.routerView = new RouterView(this, ".router-view");
    console.log("Router created");
  }

  getAllLinks() {
    let allLinks = document.querySelectorAll("a");

    for (let i = 0; i < allLinks.length; i++) {
      let pathname = allLinks[i].pathname;
      this.routers[pathname] = true;
    }

    this.linkList.forEach((element) => {
      if (this.routers[element.routeName] === true)
        this.routers[element.routeName] = element.data;
      new Link(this, element.routeName);
    });
  }

  update(e) {
    // console.log("router updated", e);
  }
}

export default Router;
