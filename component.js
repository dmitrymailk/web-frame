import Event from "./event.js";
class Component extends Event {
    constructor() {
        super()
        this.hash = this.uuidv4();
        this.renderResult = ``;
        this.initComponent()
    }

    initComponent() {
        this.on("created", () => this.created())
    }

    created() {
        console.log('created component');
    }

    $el(ref) {
        return document.querySelector(
            `*[data-ref='${ref}'][data-hash='${this.hash}']`
        );
    }
}

export default Component;