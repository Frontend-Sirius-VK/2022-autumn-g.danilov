import { KeepsBlock } from "./KeepsBlock.js";

export class KeepRender {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {
        this.container = document.createElement('div');
        this.container.classList.add('main-container');
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