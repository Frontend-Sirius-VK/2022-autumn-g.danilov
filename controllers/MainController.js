import { Keeps } from "../models/Keeps.js";
import { MainView } from "../view/MainView.js";


export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const keeps = new Keeps();
        keeps.fetchData();
    }
}