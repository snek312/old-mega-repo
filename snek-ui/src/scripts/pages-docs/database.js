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
                id: "message",
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
                id: "message",
                content: 'Second example message.'
            },
            {
                id: "message",
                content: 'Created another example message. I hope you liked it. Lorem lorem lorems'
            }
        ]
    }
]
const newDB = [{
        id: "header",
        header: "What's new in " + version,
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
                id: "message",
                content: 'Library is still in very early development stage, so please issue any bugs you find! '
            }
        ]
    },
    {
        id: "article",
        header: "0.1.0a",
        content: [
            '- added message element to ui',
            '- button and message docs updated',
            '- js cleaning'
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
                id: "message",
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
        content: [
            'A simple button',
            {
                id: "example",
                content: 'basic'
            },
            {
                id: "message",
                content: '<p>&lt;button class="<strong>button-color ui-button</strong>"&gt;basic&lt;/button&gt;</p>'
            }
        ]
    },
    {
        id: "article",
        header: "Alternative buttons",
        content: [
            'Buttons can have multiple colours',
            {
                id: "example",
                styles: 'button-color--alt',
                content: 'alternative'
            },
            {
                id: "example",
                styles: 'button-color--dark',
                content: 'dark'
            },
            {
                id: "message",
                content: '<p> &lt;button class="<strong>button-color button-color--alt ui-button</strong>"&gt;alternative&lt;/button&gt; </p> <p> &lt;button class="<strong>button-color button-color--dark ui-button</strong>"&gt;alternative&lt;/button&gt;</p> ',
            }

        ]
    }
]

const containerDB = [{
        id: "header",
        header: "Container",
        subtext: "How to create container"
    },
    {
        id: "article",
        header: "Container",
        content: [
            'You cant see it, but its here',
            {
                id: "message",
                content: 'Something.'
            }
        ]
    }
]

const messageDB = [{
        id: "header",
        header: "Message",
        subtext: "How to create simple button"
    },
    {
        id: "article",
        header: "Message",
        content: [
            'Simple message',
            {
                id: "message",
                content: '<p>This is an example. <i class="fas fa-exclamation-circle"></i></p>'
            }
        ]
    },
    {
        id: "article",
        header: "Warning",
        content: [
            'Warning message',
            {
                id: "warning",
                content: '<p></i>Warning! Site not working properly. Contact somebody! <i class="fas fa-exclamation-triangle"></p>'
            }
        ]
    }
]

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
    },
    {
        id: "message",
        array: messageDB
    }
];

const buttonsArray = ['start', 'new', ]
const howtouseArray = ['buttojn', 'buttodwa', 'dwa', 'ziu']
const elementsArray = ['button', 'container', 'message', 'divider'];
const modulesArray = ['dropdown'];

const menuDB = [buttonsArray, howtouseArray, elementsArray, modulesArray];