import Base from "./base.js";
class Link {
  constructor(router, hrefName) {
    this.hrefName = hrefName;
    this.router = router;
    this.init();
  }
  init() {
    let allLinks = document.querySelectorAll(`a[href='${this.hrefName}']`);
    for (let link of allLinks) {
      link.addEventListener("click", this.redirect.bind(this));
    }
  }

  redirect(event) {
    event.preventDefault();
    // console.log("redirect");
    history.pushState({ page: 1 }, "title 1", `#!${event.target.pathname}`);
    this.router.emit("update", { path: event.target.pathname });
  }
}

export default Link;
