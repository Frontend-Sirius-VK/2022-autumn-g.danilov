import EventBus from "../utils/eventBus.js";
import { HeaderBlock } from "../components/header/HeaderBlock.js";
import { KeepRender } from "../components/main/KeepRender.js";


export class MainView {
    constructor() {
        this.header = null;
        this.leftColumn = null;
        this.keeps = null;
        
        EventBus.on('questions:got-info', this.update.bind(this));
    }

    render() {
        const body = document.querySelector('body');
        this.header = new HeaderBlock(body);
        this.keeps = new KeepRender(body);

        this.header.render();
    }

    update(data = []) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }
        this.keeps.update(data);
    }
}