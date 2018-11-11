(function () {
    window.addEventListener("scroll", function () {
        const elementNav = document.getElementById('id-nav').classList;
        const logoNav = document.getElementById('id-logo_text').classList;
        const upButton = document.getElementById('id-up_button').classList;
        let elements = document.getElementsByClassName('ui-list--item');

        logoNav.add('logo-hover-black');
        elementNav.add('ui-nav');

        for (i = 0; i < elements.length; i++) {
            elements[i].classList.add('ui-nav-button');
        }

        if (this.scrollY == 0) {
            logoNav.remove('logo-hover-black')
            elementNav.remove('ui-nav');
            for (i = 0; i < elements.length; i++) {
                elements[i].classList.remove('ui-nav-button');
            }
        }

        if (this.scrollY > 300) {
            upButton.add('doc-up_active');
        } else if (this.scrollY < 300) {
            upButton.remove('doc-up_active');
        }
    })


    document.getElementById('id-dropdown').addEventListener("click", function () {
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

    const elementDrop = document.getElementById('id-dropdown_list').classList;
    const elementIcon = document.getElementById('id-drop_icon').classList;

    if (elementDrop.contains('dropdown--active')) {
        document.addEventListener("click", function () {
            elementDrop.remove('dropdown--active');
            elementIcon.remove('dropdown--icon-active');
        })
    }
})()