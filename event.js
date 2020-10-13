class Event {
  constructor() {
    this.events = {};
  }

  on(type, registerFunction) {
    let event = this.events[type];
    if (!event) this.events[type] = [];

    this.events[type].push(registerFunction);
  }

  emit(type, data = {}) {
    let event = this.events[type];
    if (!event) {
      console.warn("This event doesnt exist");
      return 0;
    }
    event.forEach((func) => func(data));
  }

  off(type) {
    let event = this.events[type];
    if (!event) {
      console.error("This event doesnt exist ", type);
      return 0;
    }
    delete this.events[type];
  }

  uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

export default Event;
