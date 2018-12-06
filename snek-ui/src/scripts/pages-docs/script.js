(function () {

    navmenuElementsCreator();
    checkTitle();

    function checkTitle() {
        const title = document.title;
        for (let i = 0; i < menuDB.length; i++) {
            for (let j = 0; j < menuDB[i].length; j++) {
                if (title.includes(menuDB[i][j])) {
                    huj(menuDB[i][j]);
                }
            }
        }
    }

    function huj(title) {
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
                    // HeaderCreator('id-test', DB, i);
                    // ParagraphCreator('id-test', DB, i);
                    ArticleCreator('id-test', DB, i);
                    break;
            }
        }
    }

    function navmenuElementsCreator() {
        elementInit('id-howtouse', howtouseArray);
        elementInit('id-elements', elementsArray);
        elementInit('id-modules', modulesArray);
        document.getElementById('id-version').innerHTML = 'new in ' + version;
    }

    function ArticleCreator(id, database, i) {
        const articleElement = document.createElement('article');
        articleElement.classList.add('doc-article');

        HeaderCreator(articleElement, database, i);
        ParagraphCreator(articleElement, database, i);

        document.getElementById(id).appendChild(articleElement);


    }

    function ParagraphCreator(element, database, i) {
        const groupElement = document.createElement('div');
        for (j = 0; j < database[i].content.length; j++) {

            switch (true) {
                case typeof (database[i].content[j]) === "string":
                    const spanElement = document.createElement('p');
                    spanElement.innerHTML = database[i].content[j];
                    groupElement.appendChild(spanElement);

                    element.appendChild(groupElement);
                    break;
                case database[i].content[j].id === 'example':
                    const divElement = document.createElement('div');
                    divElement.classList.add('ui-message')
                    divElement.innerHTML = database[i].content[j].content;
                    element.appendChild(divElement);
                    break;
            }
        }
    }

    // function ParagraphCreator(id, database, i) {

    //     for (j = 0; j < database[i].content.length; j++) {

    //         switch (true) {
    //             case typeof (database[i].content[j]) === "string":
    //                 const spanElement = document.createElement('p');
    //                 spanElement.innerHTML = database[i].content[j];
    //                 document.getElementById(id).appendChild(spanElement);
    //                 break;
    //             case database[i].content[j].id === 'example':
    //                 const divElement = document.createElement('div');
    //                 divElement.innerHTML = database[i].content[j].content;
    //                 document.getElementById(id).appendChild(divElement);
    //                 break;
    //         }
    //     }
    // }



    function elementInit(id, array) {
        for (let i = 0; i < array.length; i++) {
            MenuElementCreator(id, array, i);
        }
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

        // document.getElementById(id).appendChild(headerElement);
        element.appendChild(headerElement);

    }

    function MenuElementCreator(id, array, i) {
        const listItemElement = document.createElement('li');
        const anchorElement = document.createElement('a');
        const divElement = document.createElement('div');

        divElement.innerHTML = array[i];
        // divElement.classList.add('doc-nav_li');
        checkExist(anchorElement, divElement, array, i);
        // anchorElement.setAttribute('href', array[i] + '.html');

        anchorElement.appendChild(divElement);
        listItemElement.appendChild(anchorElement);

        document.getElementById(id).appendChild(listItemElement);
    }
}())