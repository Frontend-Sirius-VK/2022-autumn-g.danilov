export class HeaderBlock {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const header = document.createElement('header');

        const leftHeader = document.createElement('div');
        leftHeader.classList.add('left-header');

        const mainMenu = document.createElement('div');
        mainMenu.classList.add('main-menu');

        const mainMenuButton = document.createElement('button');
        mainMenuButton.classList.add('main-menu-button');

        const logo = document.createElement('div');
        logo.classList.add('keep');

        const emblem = document.createElement('img');
        emblem.classList.add('emblem');

        const keepSpan = document.createElement('span');
        keepSpan.classList.add('keep-span');

        mainMenu.append(mainMenuButton);
        logo.append(emblem, keepSpan);
        leftHeader.append(mainMenu, logo);

        const centerHeader = document.createElement('div');
        centerHeader.classList.add('center-header');

        const searchContainer = document.createElement('div');
        searchContainer.classList.add('search-container');

        const searchForm = document.createElement('form');
        searchForm.classList.add('search-form');

        const deleteSearchButton = document.createElement('button');
        deleteSearchButton.classList.add('delete-search-button');

        const searchStringContainer = document.createElement('div');
        searchStringContainer.classList.add('search-string-container');

        const searchString = document.createElement('input');
        searchString.classList.add('search-string');

        const searchButton = document.createElement('button');
        searchButton.classList.add('search-button');

        searchStringContainer.append(searchString);
        searchForm.append(deleteSearchButton, searchStringContainer, searchButton);
        searchContainer.append(searchForm);
        centerHeader.append(searchContainer);

        const userHeader = document.createElement('div');
        const userContainer = document.createElement('div');
        userContainer.classList.add('user');

        const userButton = document.createElement('button');
        userButton.classList.add('user-button');

        userContainer.append(userButton);
        userHeader.append(userContainer);

        header.append(leftHeader, centerHeader, userHeader);

        this.parent.appendChild(header);
    }
}