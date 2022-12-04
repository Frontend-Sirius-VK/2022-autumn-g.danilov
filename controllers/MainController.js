import { MainView } from "../view/MainView.js";


export class MainController {
    process() {
        const view = new MainView();
        view.render();

    }
}