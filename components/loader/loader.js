export class Loader {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const mask = document.createElement('div');
        mask.classList.add('mask');
        const loader = document.createElement('div');
        loader.className.add('loader');
        mask.append(loader);

        window.addEventListener('load', () => {
            mask.classList.add('hide');
            setTimeout(() => {
                mask.remove;
            }, 600)
        })

        this.parent.appendChild(loaderWrap);
    }
}