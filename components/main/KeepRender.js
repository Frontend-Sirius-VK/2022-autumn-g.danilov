import { KeepsBlock } from "./KeepsBlock.js";
import { Loader } from "../loader/loader.js";
import EventBus from "../../utils/EventBus.js";

export class KeepRender {
    constructor(parent) {
        this.parent = parent;
        this.container = null;

        EventBus.on('keep:loading', this.render.bind(this));
    }

    render(data) {
        this.container = document.createElement('div');
        this.container.classList.add('main-container');

        if (!data) {
            this.parent.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.prepend(this.container);
            return;
        }

        data.forEach((keep) => {
            const newKeep = new KeepsBlock(this.container);
            newKeep.render(keep.title, keep.text);
        });
        this.parent.appendChild(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}