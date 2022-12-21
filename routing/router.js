import {MainController} from '../controllers/MainController.js';
import EventBus from '../utils/EventBus.js';

const routes = {
    '/': MainController
}

export class Router {
    constructor() {
        this.onDocumentClick = this.onDocumentClick.bind(this);
        EventBus.off('keeps:got-info');
        EventBus.off('keep:loading');
    }

    onDocumentClick(event) {
        const {target} = event;
        const {tagName} = target;

        if (tagName === 'A') {
            event.preventDefault();

            if (target.href !== undefined) {
                this.go(target.href);
            }
        }
    }

    go(pathname) {
        window.history.pushState({}, '', pathname);
        this.invokeController();
    }

    invokeController() {
        const ControllerClass = routes[window.location.pathname];
        const controller = new ControllerClass();
        controller.process();
    }

    start() {
        document.addEventListener('click', this.onDocumentClick);
        this.invokeController();
    }

    stop() {
        document.removeEventListener('click', this.onDocumentClick);
    }
}

export const router = new Router();