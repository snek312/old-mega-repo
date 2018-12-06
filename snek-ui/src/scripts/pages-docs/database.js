const version = '0.1.0';

const startDB = [{
        id: "header",
        header: "Getting Started",
        subtext: "Getting up and running with Snek UI"
    },
    {
        id: "article",
        header: "Article header",
        subtext: "Subheader for more info",
        content: [
            'lorem lorem w dupe worem',
            'witam2',
            'zium',
            {
                id: "example",
                content: 'First example message.'
            }
        ]
    },
    {
        id: "article",
        header: "Another article with diffrent data",
        content: [
            'lorem lorem w dupe worem',
            'Two examples bellow.',
            {
                id: "example",
                content: 'Second example message.'
            },
            {
                id: "example",
                content: 'Created another example message. I hope you liked it. Lorem lorem lorems'
            }
        ]
    }
]
const newDB = [{
        id: "header",
        header: "Whats new in " + version,
        subtext: ""
    },
    {
        id: "article",
        header: "Changes log",
        content: [
            '- created first version of Snek Docs',
            '- created pseudo database for Snek Docs',
            '- minor main page tweaks',
            '- bug fixes',
            '- updated default theme',
            '- added new things to the library',


            {
                id: "example",
                content: 'Library is still in very early development stage, so please issue any bugs you find! '
            }
        ]
    },
    {
        id: "article",
        header: "Future plans",
        content: [
            '- upgrading main page with more cool features',
            '- create mobile responsive page for docs',
            '- add more content to docs',
            '- add new theme',

            {
                id: "example",
                content: 'Navbar is working, shadded out links are not availble at this time. Those names are going to change in future.'
            }
        ]
    }
]
const buttonDB = [{
        id: "header",
        header: "Button",
        subtext: "How to create simple button"
    },
    {
        id: "article",
        header: "Button",
        // subtext: "How to create simple button",
        content: [
            'lorem lorem w dupe worem',
            'witam2',
            {
                id: "example",
                content: 'created content'
            }
        ]
    }
]

const containerDB = [{
        id: "header",
        header: "Container",
        subtext: "How to create simple button"
    },
    {
        id: "article",
        header: "Container",
        // subtext: "How to create simple button",
        content: [
            'lorem lorem w dupe worem',
            'witam2',
            {
                id: "example",
                content: 'created content'
            }
        ]
    }
]
const buttonsArray = ['start', 'new', ]
const howtouseArray = ['buttojn', 'buttodwa', 'dwa', 'ziu']
const elementsArray = ['button', 'container', 'divider'];
const modulesArray = ['dropdown'];

const menuDB = [buttonsArray, howtouseArray, elementsArray, modulesArray];


const database = [{
        id: "start",
        array: startDB
    },
    {
        id: "new",
        array: newDB
    },
    {
        id: "button",
        array: buttonDB
    },
    {
        id: "container",
        array: containerDB
    }
];