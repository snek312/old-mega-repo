let value = [];
const obj = {};
let key, values;

document.getElementById('id-newMotyw').addEventListener('click', () => {
    const
        motyw = document.getElementById('id-newMotyw'),
        parentMotyw = motyw.parentNode,
        div = document.createElement('div'),
        divDwa = document.createElement('div'),
        button = document.createElement('button');


    button.setAttribute('class', 'button');
    button.innerText = '+';
    divDwa.setAttribute('class', 'parent');

    divDwa.appendChild(button);

    elementListener(button, divDwa, button);
    div.setAttribute('class', 'firstWrapper');


    div.appendChild(divDwa)
    parentMotyw.insertBefore(div, motyw);
    // testbozy()

})

function elementListener(element, parent, before) {
    return element.addEventListener('click', () => {
        const dropdownElement = document.querySelector('.dropdown');

        if (dropdownElement) {
            dropdownElement.remove();
        } else {
            // create(parent, before);
            dropdown(element, before);
            // parent.remove(element);
            document.getElementById('op1').addEventListener('click', () => {
                const node = parent.querySelector('.nodeName');
                if (node) {
                    createError(text = 'name nodes.');
                } else {
                    createNode(parent, before, 'nodeName');
                }
                // createNode(parent, before, 'nodeName');
                // document.querySelector('.dropdown').remove();
            });
            document.getElementById('op2').addEventListener('click', () => {
                const node = parent.querySelector('.attribute');
                if (node) {
                    createError(text = 'attribute nodes.');
                } else {
                    createAttr(parent, before);
                }
            });
            document.getElementById('op3').addEventListener('click', () => {
                testbozy(parent)
            });
            document.getElementById('op4').addEventListener('click', () => {
                const node = parent.querySelector('.textContent');
                if (node) {
                    createError(text = 'text nodes.');
                } else {
                    createNode(parent, before, 'textContent');
                    testListener(parent, before, 'textContent');

                }
            })
        }

    })
}


function testListener(element, parent, before) {
    const downloadButton = document.getElementById('id-download');
    return downloadButton.addEventListener('click', () => {

        console.log([parent.parentNode]);
        console.log(obj);

        if (parent.parentNode.classList.contains('parent')) {
            const tescik = element.querySelector('.textContent').value;
            key = 'textContent';
            value = tescik;
            obj[key] = value;
            console.log('tak')
        } else {
            const tescik = element.querySelector('.textContent').value;

            if (obj.children) {
                chl = 'children'
                key = key + [chl];
                value = {
                    textContent: tescik
                };
                obj[key] = value;
            } else {
                key = 'children';
                value = {
                    textContent: tescik
                };
                obj[key] = value;
            }

            console.log('tak children')
        }

        console.log(obj);

    })
}

function buttonListener(element, parent, before) {
    return element.addEventListener('click', () => {
        createtest(parent, before)
    })
}

function create(parent, before) {
    const
        element = document.createElement('span');

    element.innerText = 'witam';
    parent.insertBefore(element, before);

}

function createError(text = '') {
    const

        element = document.createElement('div'),
        span = document.createElement('span');

    element.setAttribute('class', 'error')
    span.innerText = ' ERROR, You cannot have more than one ' + text;
    element.appendChild(span)
    document.body.appendChild(element);

    const interval = setInterval(() => {
        element.remove();
    }, 4000);

    interval;
}


function createtest(parent, before) {
    const
        element = document.createElement('div'),
        inputKey = document.createElement('input'),
        inputValue = document.createElement('input');

    inputKey.setAttribute('type', 'text');
    inputKey.setAttribute('placeholder', 'key');

    inputValue.setAttribute('type', 'text');
    inputValue.setAttribute('placeholder', 'value');

    element.appendChild(inputKey);
    element.appendChild(inputValue);

    parent.insertBefore(element, before);

}


function createNode(parent, before, spanText) {
    const
        element = document.createElement('div'),
        span = document.createElement('span'),
        input = document.createElement('input');

    input.setAttribute('class', spanText);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'name');



    span.innerText = spanText;
    element.appendChild(span);
    element.appendChild(input);

    parent.insertBefore(element, before);

}

function createAttr(parent, before) {
    const
        element = document.createElement('div'),
        div = document.createElement('div'),

        span = document.createElement('span'),
        inputKey = document.createElement('input'),
        inputValue = document.createElement('input'),
        button = document.createElement('button');


    element.setAttribute('class', 'attribute');

    inputKey.setAttribute('type', 'text');
    inputKey.setAttribute('placeholder', 'key');

    inputValue.setAttribute('type', 'text');
    inputValue.setAttribute('placeholder', 'value');

    button.setAttribute('class', 'button');
    button.innerText = '+';

    buttonListener(button, element, button);



    span.innerText = 'attributes';
    div.appendChild(inputKey);
    div.appendChild(inputValue);

    element.appendChild(span);
    element.appendChild(div);
    element.appendChild(button);



    parent.insertBefore(element, before);


}

function dropdown(parent) {
    const
        div = document.createElement('div'),
        tpl = `<button id="op1" class="option">Node name</button>
        <button id="op2" class="option">Attributes</button>
        <button id="op3" class="option">Child</button>
        <button id="op4" class="option">Text</button>`;

    div.setAttribute('class', 'dropdown active');
    div.innerHTML = tpl;
    parent.appendChild(div);

}


function testbozy(parent) {
    const
        parentMotyw = parent,
        div = document.createElement('div'),
        divDwa = document.createElement('div'),
        button = document.createElement('button');


    button.setAttribute('class', 'button');
    button.innerText = '+';
    divDwa.appendChild(button);

    elementListener(button, divDwa, button);
    div.setAttribute('class', 'firstWrapper');


    div.appendChild(divDwa);
    parentMotyw.appendChild(div);

}
////////////////////////////

// document.getElementById('id-download').addEventListener('click', () => {


//     console.log('test')





//     // const test = dupa('.nodeName');
//     // const test2 = dupa('.textContent');

//     // console.log(test);
//     // let value = [];

//     // for (let i = 0; i < test.length; i++) {

//     //     dupatestowa(test, test2, i, value);
//     // }
//     // console.log(JSON.stringify(value));

// })



function dupa(ziu = ' ') {
    const test = document.querySelectorAll(ziu)

    return test;
}


function dupatestowa(ddd = [], dwa = [], i, value) {
    const obj = {};
    let key, values;
    const ziu = ddd[i].value;
    const ziu2 = dwa[i].value;


    ppp(obj, key, 'nodeNames', values, ziu);
    ppp(obj, key, 'textContent', values, ziu2);



    console.log(ziu);
    console.log(obj)
    value.push(obj);

}


function ppp(obj, key, keyString, values, valuesD) {
    key = keyString;
    values = valuesD;
    return obj[key] = values;
}


// let
//     value = [];
// // value[0].children = {};
// console.log(value)
// console.log(JSON.stringify(value));

// // ////////////////////////////////////////
// const obj = {}
// let key = 'dupa';
// let values = 'dupo'

// obj[key] = values;
// console.log(obj);

// key = 'dupaa';
// values = 'dupow'

// obj[key] = values;

// console.log(obj);
// value.push(obj);
// console.log(value);
// console.log(JSON.stringify(value));