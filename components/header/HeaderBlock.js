export class HeaderBlock {
    constructor(parent) {
        this.parent = parent;
        this.keepSrc = '/img/keep.png';
        this.searchSrc = '/img/search.svg';
        this.menuSrc = '/img/menu.svg';
        this.cancelSrc = '/img/cancel.svg';
    }

    render() {
        const header = document.createElement('header');

        const leftHeader = document.createElement('div');
        leftHeader.classList.add('left-header');

        const mainMenu = document.createElement('div');
        mainMenu.classList.add('main-menu');

        const mainMenuButton = document.createElement('button');
        mainMenuButton.disabled = true;
        mainMenuButton.classList.add('main-menu-button');

        const mainMenuIcon = document.createElement('img');
        mainMenuIcon.classList.add('menu-svg');
        mainMenuIcon.src = this.menuSrc;

        const logo = document.createElement('div');
        logo.classList.add('keep');

        const emblem = document.createElement('img');
        emblem.classList.add('emblem');
        emblem.src = this.keepSrc;

        const keepSpan = document.createElement('span');
        keepSpan.classList.add('keep-span');
        keepSpan.textContent = 'Keep'

        mainMenuButton.append(mainMenuIcon);
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
        deleteSearchButton.disabled = true;
        deleteSearchButton.classList.add('delete-search-button');

        const deleteIcon = document.createElement('img');
        deleteIcon.classList.add('delete-svg');
        deleteIcon.src = this.cancelSrc;

        const searchStringContainer = document.createElement('div');
        searchStringContainer.classList.add('search-string-container');

        const searchString = document.createElement('input');
        searchString.disabled = true;
        searchString.classList.add('search-string');

        const searchButton = document.createElement('button');
        searchButton.disabled = true;
        searchButton.classList.add('search-button');

        const seacrhIcon = document.createElement('img');
        seacrhIcon.classList.add('search-svg');
        seacrhIcon.src = this.searchSrc;
        
        deleteSearchButton.append(deleteIcon);
        searchButton.append(seacrhIcon);
        searchStringContainer.append(searchString);
        searchForm.append(searchButton, searchStringContainer, deleteSearchButton);
        searchContainer.append(searchForm);
        centerHeader.append(searchContainer);

        const userHeader = document.createElement('div');
        const userContainer = document.createElement('div');
        userContainer.classList.add('user');

        const userButton = document.createElement('button');
        userButton.disabled = true;
        userButton.classList.add('user-button');

        userContainer.append(userButton);
        userHeader.append(userContainer);

        header.append(leftHeader, centerHeader, userHeader);

        this.parent.appendChild(header);

    }
}