import EventBus from "../utils/eventBus.js";

export class Keeps {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    fetchData() {
        fetch('/keeps').then((response) => response.json())
                                .then((data) => {
                                    this.title = data.title;
                                    this.text = data.text;

                                    EventBus.emit('questions:got-info', data);
                                })
    }
}