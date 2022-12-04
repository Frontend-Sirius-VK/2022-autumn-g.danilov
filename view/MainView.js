import EventBus from "../utils/eventBus.js";
import { HeaderBlock } from "../components/header/HeaderBlock.js";


export class MainView {
    constructor() {
        this.header = null;
        this.leftColumn = null;
        this.noteContainer = null;
        
        EventBus.on('questions:got-info', this.update.bind(this));
    }

    render() {
        const body = document.querySelector('body');
        this.header = new HeaderBlock(body);

        this.header.render();
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }
        this.questions.update(data);
    }
}