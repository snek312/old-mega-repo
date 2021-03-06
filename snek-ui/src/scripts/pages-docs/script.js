(function () {
    // MAIN CODE

    createMobileNavbar();
    navmenuElementsCreator();
    checkTitle();

    // --
    // FUNCTIONS 

    // MODULE 1 - Mobile navbar
    function createMobileNavbar() {
        const mediaQuery = window.innerWidth;

        if (mediaQuery < 769) {
            const divElement = document.createElement('div');
            const groupElement = document.createElement('div');

            divElement.innerHTML = '<i class="fas fa-bars"></i>';
            groupElement.appendChild(divElement);
            groupElement.classList.add('doc-mobile-navbar');
            const navbarElement = document.querySelector('.doc-navbar');

            document.getElementsByTagName('nav')[0].insertBefore(groupElement, navbarElement);
            document.querySelector('.doc-mobile-navbar').addEventListener('click', function () {
                const e = navbarElement.classList;
                if (e.contains('activated')) {
                    e.remove('activated');
                } else {
                    e.add('activated');
                }
            })
        }
    }
    // --
    // MODULE2 - navbar menu elements
    function navmenuElementsCreator() {
        elementInit('id-howtouse', howtouseArray);
        elementInit('id-elements', elementsArray);
        elementInit('id-modules', modulesArray);
        document.getElementById('id-version').innerHTML = 'new in ' + version;
    }

    function elementInit(id, array) {
        for (let i = 0; i < array.length; i++) {
            MenuElementCreator(id, array, i);
        }
    }

    function MenuElementCreator(id, array, i) {
        const listItemElement = document.createElement('li');
        const anchorElement = document.createElement('a');
        const divElement = document.createElement('div');

        divElement.innerHTML = array[i];
        checkExist(anchorElement, divElement, array, i);

        anchorElement.appendChild(divElement);
        listItemElement.appendChild(anchorElement);

        document.getElementById(id).appendChild(listItemElement);
    }

    function checkExist(element, childElement, array, i) {

        for (let j = 0; j < database.length; j++) {
            const check = array[i].includes(database[j].id);

            if (check) {
                childElement.classList.remove('doc-no_click');
                childElement.classList.add('doc-nav_li');
                element.setAttribute('href', array[i] + '.html');
            } else if (!childElement.classList.contains('doc-nav_li')) {
                childElement.classList.add('doc-no_click');
            }
        }
    }
    // --
    // MODULE 3 - page content
    function checkTitle() {
        const title = document.title;
        for (let i = 0; i < menuDB.length; i++) {
            for (let j = 0; j < menuDB[i].length; j++) {
                if (title.includes(menuDB[i][j])) {
                    checkDBTitle(menuDB[i][j]);
                }
            }
        }
    }

    function checkDBTitle(title) {
        for (let I = 0; I < database.length; I++) {
            if (title === database[I].id) {
                const DB = database[I].array;
                checkDatabase(DB);
            }
        }
    }

    function checkDatabase(DB) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].array === DB) {
                PageCreator(DB);
            }
        }
    }

    function PageCreator(DB) {
        for (let i = 0; i < DB.length; i++) {
            const id = DB[i].id;

            switch (true) {
                case id === 'header':
                    MainHeaderCreator('id-main_header', DB);
                    break;
                case id === 'article':
                    ArticleCreator('id-section', DB, i);
                    break;
            }
        }
    }

    function MainHeaderCreator(id, database) {
        const h1Element = document.createElement('h1');
        const h3Element = document.createElement('h3');
        const divElement = document.createElement('div');

        h1Element.innerHTML = database[0].header;
        h3Element.innerHTML = database[0].subtext;

        divElement.appendChild(h1Element);
        divElement.appendChild(h3Element);

        document.getElementById(id).appendChild(divElement);
    }

    function ArticleCreator(id, database, i) {
        const articleElement = document.createElement('article');
        articleElement.classList.add('doc-article');

        HeaderCreator(articleElement, database, i);
        ArticleContentCreator(articleElement, database, i);

        document.getElementById(id).appendChild(articleElement);
    }

    function HeaderCreator(element, database, i) {
        const h2Element = document.createElement('h2');
        const headerElement = document.createElement('header');

        h2Element.innerHTML = database[i].header;
        headerElement.classList.add('doc-article_header');
        headerElement.appendChild(h2Element);

        if (database[i].subtext) {
            const h4Element = document.createElement('h4');
            h4Element.innerHTML = database[i].subtext;
            headerElement.appendChild(h4Element);
        }

        element.appendChild(headerElement);
    }

    function ArticleContentCreator(element, database, i) {
        const groupElement = document.createElement('div');
        groupElement.classList.add('flex-box', 'flex-column');
        for (j = 0; j < database[i].content.length; j++) {

            switch (true) {
                case typeof (database[i].content[j]) === "string":
                    ParagraphElementCreator(groupElement, element, database, i, j);
                    break;
                case database[i].content[j].id === 'example':
                    ExampleElementCreator(element, database, i, j);
                    break;
                case database[i].content[j].id === 'message':
                    MessageElementCreator(element, database, i, j);
                    break;
                case database[i].content[j].id === 'warning':
                    WarningElementCreator(element, database, i, j);
                    break;
                case database[i].content[j].id === 'code':
                    CodeElementCreator(element, database, i, j);
                    break;
                case database[i].content[j].id === 'img':
                    ImgElementCreator(element, database, i, j);
                    break;
            }
        }
    }

    function ParagraphElementCreator(group, element, database, i, j) {
        const spanElement = document.createElement('p');
        spanElement.innerHTML = database[i].content[j];
        group.appendChild(spanElement);
        element.appendChild(group);
    }

    function ExampleElementCreator(element, database, i, j) {
        let newElement;
        switch (true) {
            case database[1].header === 'Button':
                newElement = document.createElement('button');
                newElement.classList.add('button-color', database[i].content[j].styles);
                break;
            case database[1].header === 'Container':
                newElement = document.createElement('div');
                break;
            default:
        }

        newElement.classList.add('ui-' + database[1].header.toLowerCase());
        newElement.innerHTML = database[i].content[j].content;
        element.appendChild(newElement);
    }

    function MessageElementCreator(element, database, i, j) {
        const divElement = document.createElement('div');
        divElement.classList.add('ui-message')
        divElement.innerHTML = database[i].content[j].content;
        element.appendChild(divElement);
    }

    function WarningElementCreator(element, database, i, j) {
        const divElement = document.createElement('div');
        divElement.classList.add('ui-message', 'message--warning');
        divElement.innerHTML = database[i].content[j].content;
        element.appendChild(divElement);
    }

    function CodeElementCreator(element, database, i, j) {
        const divElement = document.createElement('div');
        divElement.classList.add('ui-message', 'message--code');
        divElement.innerHTML = database[i].content[j].content;
        element.appendChild(divElement);
    }

    function ImgElementCreator(element, database, i, j) {
        const imgElement = document.createElement('img');
        // imgElement.innerHTML = database[i].content[j].src;
        imgElement.setAttribute('src', database[i].content[j].src);

        element.appendChild(imgElement);
    }


}())