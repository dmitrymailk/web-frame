import Base from "./base.js";

class RouterView extends Base {
  constructor(router, routerViewElem) {
    super();
    this.mountBlock = this.$el(routerViewElem);
    this.router = router;
    this.currentComponent = {}

    console.log("router view created", this.mountBlock);
    this.init();
  }

  init() {
    this.router.on("update", (e) => {
      this.setPage(e);
    });

    this.router.on("pagerefresh", (e) => {
      this.setPage(e);
    });
  }

  setPage(e) {
    let component = this.router.routers[e.path];
    if (component) {
      component = component();
      component.render();
      this.mountBlock.innerHTML = component.renderResult;
      this.currentComponent = component

      component.emit("created");

      component.on("updated", (e) => {
        this.updatePage(e);
        e.created()
      })
    }
  }

  updatePage(component) {
    this.currentComponent = component;
    this.mountBlock.innerHTML = component.renderResult;
  }
}

export default RouterView;
