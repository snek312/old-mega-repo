const version = '0.1.0b';

const startDB = [{
        id: "header",
        header: "Getting Started",
        subtext: "Getting up and running with Snek UI"
    },
    {
        id: "article",
        header: "Introduce to Snek UI Docs",
        subtext: "ECMA5 based",
        content: [
            "This will be simple example of hyperlink in a paragraph <a href='button.html'>test link</a>",
            'This documentation page will provide any info that you need know to use Snek UI',
            {
                id: "message",
                content: 'Current page is based on ECMA5 therefore syntax may be outdated.'
            }
        ]
    },
    {
        id: "article",
        header: "How to use Snek Docs ",
        subtext: "Navigation menu",

        content: [
            'On the left side of page you will find navigation menu',
            {
                id: "message",
                content: '<p>On mobile click hamburger icon to open menu. <i class="fas fa-exclamation-circle"></i></p>'
            },
            'Menu divide on two major sections:',
            '- Buttons (single item, more data)',
            '- Arrays (multiple list items contains less but specific data about individual element)',
            {
                id: "img",
                src: '../src/img/db_img/example-1.png'
            },
            {
                id: "message",
                content: '<p>Faded out items meaning not available content at this moment. <i class="fas fa-exclamation-circle"></i></p>'
            },
        ]
    },
    {
        id: "article",
        header: " ",
        subtext: "Buttons",

        content: [
            'Buttons move you to bigger pages with more informations, focusing more on general issues than individual one.',
            {
                id: "message",
                content: 'Message.'
            },

        ]
    },
    {
        id: "article",
        header: " ",
        subtext: "Arrays",

        content: [
            'That is a list with every docs content, each list item have its own individual page with simple instructions how to create, code snippet and examples. ',
        ]
    },
    {
        id: "article",
        header: "Adding stuff to pseudo database",
        subtext: "Pseudo database",

        content: [
            "This will be simple example of hyperlink in a paragraph <a href='button.html'>test link</a>",
            'Current version of Snek Docs is using pseudo JS database to show content on site. JSDB is a noSQL-like database which contains page content data stored in arrays and objects.',
            'Each array represents diffrent section of data ',

            {
                id: "img",
                src: '../src/img/db_img/example-2.png'
            },
            {
                id: "img",
                src: '../src/img/db_img/example-3.png'
            }
        ]
    },
    {
        id: "article",
        header: " ",
        subtext: "Section arrays",

        content: [
            'Each section array contains objects. Page header object is always placed on 0 index of array. Next index numbers represent articles objects with its own properties. ',
            'Article objects uses declared string key properties, they do what the name suggests, however there is a declared list with explanation for each individual one:',
            {
                id: "code",
                content: '<p> id - object type name </p> <p>header - article header (only one per page and article) </p> <p> subtext - subheader with lighter color (only one per page and article)</p> <p>content - content of the object which is an array, key may be <strong>string</strong> (witch represent paragraph) or <strong>object</strong>. Each content object key have its own key properties: </p> <p> -- id - type of content object </p> <p> -- content - text ["string"]</p> <p> -- styles - css rules ["string"]</p> <p> -- src - source for file ["string"]</p>'
            }

        ]
    },
    {
        id: "article",
        header: "List of id types",
        subtext: "Object names",

        content: [
            '- <strong>header</strong> - create page header {<em>id, header, subtext </em>}',
            '- <strong>article</strong> - create new article {<em>id, header, subtext, content </em>}',

        ]
    },
    {
        id: "article",
        header: " ",
        subtext: "Object content id's",

        content: [
            '- <strong>example</strong> - create new button {<em> id, styles, content </em>}',
            '- <strong>message</strong> - create new message {<em> id, content </em>}',
            '- <strong>code</strong> - create new code snippet {<em> id, content </em>}',
            '- <strong>warning</strong> - create new warning message {<em> id, content </em>}',
            '- <strong>img</strong> - create new img {<em> id,  src </em>}',
            {
                id: 'message',
                content: 'More stuff comming soon.'
            }
        ]
    }
];
const newDB = [{
        id: "header",
        header: "What's new in " + version,
        subtext: ""
    },
    {
        id: "article",
        header: "Changes log 0.1.0c",
        subheader: "Little update",
        content: [
            '- 2 simple themes added',
            '- improved themes selector funcionality',
        ],

    },
    {
        id: "article",
        header: "Changes log 0.1.0b",
        content: [
            '- added mobile version of snek docs',
            '- snek docs css cleaning',
            '- js cleaning',
            '- added image element creator',
            '- added code snippet element creator',
            '- database docs updated'
        ],

    },
    {
        id: "article",
        header: "Changes log 0.1.0a",
        content: [
            '- added message element to ui',
            '- button and message docs updated',
            '- js cleaning'
        ]
    },
    {
        id: "article",
        header: "Changes log 0.1.0",
        subtext: "Alpha version",
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
];
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
                id: "code",
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
                id: "code",
                content: '<p> &lt;button class="<strong>button-color button-color--alt ui-button</strong>"&gt;alternative&lt;/button&gt; </p> <p> &lt;button class="<strong>button-color button-color--dark ui-button</strong>"&gt;alternative&lt;/button&gt;</p> ',
            }

        ]
    }
];

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
                id: "code",
                content: '<p> &lt;div class="<strong> </strong>"&gt; &lt;/div&gt; </p>',
            }
        ]
    }
];

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
            },
            {
                id: "code",
                content: '<p> &lt;div class="<strong>ui-message</strong>"&gt;This is an example&lt;/div&gt; </p>',
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
            },
            {
                id: "code",
                content: '<p> &lt;div class="<strong>ui-message message--warning</strong>"&gt;This is an example&lt;/div&gt; </p>',
            }
        ]
    },
    {
        id: "article",
        header: "Code",
        content: [
            'Code snippet for sharing',
            {
                id: "code",
                content: '<p>console.log("example");</p>'
            },
            {
                id: "code",
                content: '<p> &lt;div class="<strong>ui-message message--code</strong>"&gt;<p>console.log("example")</p>&lt;/div&gt; </p>',
            }
        ]
    }
];

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

const buttonsArray = ['start', 'new'];
const howtouseArray = ['structure', 'naming', 'themes', 'download'];
const elementsArray = ['button', 'container', 'message', 'divider'];
const modulesArray = ['dropdown'];

const menuDB = [buttonsArray, howtouseArray, elementsArray, modulesArray];