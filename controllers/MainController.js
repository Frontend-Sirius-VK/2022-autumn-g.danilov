import { Keeps } from "../models/Keeps.js";
import { MainView } from "../view/MainView.js";
import  EventBus from "../utils/EventBus.js";

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const keeps = new Keeps();
        EventBus.emit('keeps:loading');
        keeps.fetchData();
    }
}