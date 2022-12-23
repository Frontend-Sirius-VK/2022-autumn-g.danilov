import EventBus from "../utils/EventBus.js";

export class Keeps {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    fetchData() {
        fetch('/api/keeps').then((response) => response.json())
                .then((data) => {
                    this.title = data.title;
                    this.text = data.text;

                    EventBus.emit('keeps:got-info', data);
                })
    }
}