import EventBus from "../utils/EventBus.js";
import { HeaderBlock } from "../components/header/HeaderBlock.js";
import { KeepRender } from "../components/main/KeepRender.js";


export class MainView {
    constructor() {
        this.header = null;
        this.keeps = null;
        
        EventBus.on('keeps:got-info', this.update.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        
        this.header = new HeaderBlock(root);

        const keepContainer = document.createElement('div');
        this.keeps = new KeepRender(keepContainer);
        this.header.render();
        root.append(keepContainer);
    }

    update(data = []) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }
        this.keeps.update(data);
    }
}