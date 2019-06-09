const NAVBAR_MENU = [{
    textContent: 'Settings',
    route: '/settings'
}, {
    textContent: 'About',
    route: '/about'
}, {
    textContent: 'Log out',
    route: '/logout'
}
]

// temp

const PROJECTS_DATA = [{
    id: 1,
    projectName: 'test-project',
    route: 'test-project',
    projectDocuments: [{
        id: 1,
        documentName: 'first document',
        route: 'test-project/first-document'
    }, {
        id: 2,
        documentName: 'second document',
        route: 'test-project/first-document'

    }

    ]
}, {
    id: 2,
    projectName: 'test-project 2',
    route: 'test-project2',
    projectDocuments: [{
        id: 1,
        documentName: 'first document 2 ',
        route: 'test-project/first-document'

    }, {
        id: 2,
        documentName: 'second document 2',
        route: 'test-project/first-document'

    }

    ]
}

]

const USER_DATA = {
    id: 1,
    name: 'Test',
    surname: 'User'
}



export { NAVBAR_MENU, USER_DATA, PROJECTS_DATA };