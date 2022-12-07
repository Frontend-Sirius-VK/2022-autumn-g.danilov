export class KeepsBlock {
    constructor(parent) {
        this.parent = parent;
    }

    render(KeepTitle, KeepText) {
        const keep = document.createElement('div');
        keep.classList.add('keep-container');

        const title = document.createElement('div');
        title.classList.add('keep-title');
        title.textContent = KeepTitle;

        const text = document.createElement('div');
        text.classList.add('keep-text');
        text.textContent = KeepText;

        keep.append(title, text);
        this.parent.appendChild(keep);
    }
}