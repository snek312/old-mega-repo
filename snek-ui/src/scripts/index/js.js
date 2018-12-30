(function () {

    window.addEventListener("scroll", function () {
        const elementNav = document.getElementById('id-nav').classList;
        // const logoNav = document.getElementById('id-logo_text').classList;
        const upButton = document.getElementById('id-up_button').classList;
        let elements = document.getElementsByClassName('ui-list--item');
        let logoNav = document.getElementsByClassName('logo-hamburger');


        // logoNav.add('logo-hover-black');
        elementNav.add('ui-nav');

        for (i = 0; i < elements.length; i++) {
            elements[i].classList.add('ui-nav-button');
        }

        for (i = 0; i < logoNav.length; i++) {
            logoNav[i].classList.add('hamburger-black');
        }

        if (this.scrollY == 0) {
            // logoNav.remove('logo-hover-black')
            elementNav.remove('ui-nav');
            for (i = 0; i < elements.length; i++) {
                elements[i].classList.remove('ui-nav-button');
            }
            for (i = 0; i < logoNav.length; i++) {
                logoNav[i].classList.remove('hamburger-black');
            }
        }

        if (this.scrollY > 300) {
            upButton.add('doc-up_active');
        } else if (this.scrollY < 300) {
            upButton.remove('doc-up_active');
        }
    })



    document.getElementById('id-hamburger').addEventListener("click", function () {
        let elements = document.getElementsByClassName('logo-hamburger');
        const element = document.getElementById('id-nav_list').classList;
        const elementNav = document.getElementById('id-nav').classList;


        if (elements[0].classList.contains('top')) {
            elements[0].classList.remove('top');
            elements[1].classList.remove('bot');
            element.remove('clicked');
            elementNav.remove('clicked');
        } else {
            elements[0].classList.add('top');
            elements[1].classList.add('bot');
            element.add('clicked');
            elementNav.add('clicked');
        }


    })

    document.getElementById('id-dropdown').addEventListener("click", function (e) {
        const element = document.getElementById('id-dropdown_list').classList;
        const elementIcon = document.getElementById('id-drop_icon').classList;

        if (element.contains('dropdown--active')) {
            element.remove('dropdown--active');
            elementIcon.remove('dropdown--icon-active');
        } else {
            element.add('dropdown--active');
            elementIcon.add('dropdown--icon-active');
        }
    })

    if (document.getElementById('id-dropdown_list').classList.contains('dropdown--active')) {
        document.body.addEventListener('click', function () {
            const element = document.getElementById('id-dropdown_list').classList;
            element.remove('dropdown--active');
            elementIcon.remove('dropdown--icon-active');
        })
    }

    const elementDrop = document.getElementById('id-dropdown_list').classList;
    const elementIcon = document.getElementById('id-drop_icon').classList;

    if (elementDrop.contains('dropdown--active')) {
        document.addEventListener("click", function () {
            elementDrop.remove('dropdown--active');
            elementIcon.remove('dropdown--icon-active');
        })
    }

    // document.getElementById('id-theme1').addEventListener('click', function () {
    //     console.log('e');
    // });


    // for (let i = 1; i < 4; i++) {
    //     themeSelector('id-theme' + i);
    // }

    // function themeSelector(id) {
    //     document.getElementById(id).addEventListener('click', function () {
    //         themeFuncion(id);
    //     });
    // }

    // function themeFuncion(id) {
    //     console.log(id);
    //     const link = document.createElement('link');
    //     link.setAttribute('id', 'id-css-themes');
    //     link.setAttribute('rel', 'stylesheet');
    //     link.setAttribute('href', 'lib/themes/' + id + '.css');

    //     document.head.appendChild(link);
    // }


    themeSelector();
    documentStylesCreator(document.createElement('link'), false, 'src/styles/index/document.css');

    function themeSelector() {
        const link = document.createElement('link');
        documentStylesCreator(link, 'id-css-themes', 'lib/themes/ui-default.css');

        for (let i = 1; i < 4; i++) {
            styleSelector('id-theme' + i);
        }

        function styleSelector(id) {
            document.getElementById(id).addEventListener('click', function () {
                link.setAttribute('href', 'lib/themes/' + id + '.css');
            });
        }
    }

    function documentStylesCreator(link, link_id, href) {
        if (!link_id === false) {
            link.setAttribute('id', link_id);
        }
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', href);

        document.head.appendChild(link);
    }


})()