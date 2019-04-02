const version = '0.1b'
document.querySelector('footer').innerHTML = `&copy; 2019 test version build ${version}`;

document.getElementById('id-newItem').addEventListener('click', () => {
    const
        motyw = document.getElementById('id-newItem'),
        parentMotyw = motyw.parentNode,
        div = document.createElement('div'),
        divDwa = document.createElement('div'),
        button = document.createElement('button');


    button.setAttribute('class', 'button');
    button.innerHTML = '<i class="fas fa-plus">';
    divDwa.setAttribute('class', 'parent');
    divDwa.appendChild(button);

    dropdownBtnListener(button, divDwa, button);
    value.push(obj);
    array.push(new Object);
    obj = {};

    div.setAttribute('class', 'firstWrapper');
    div.appendChild(divDwa)
    parentMotyw.insertBefore(div, motyw);

})

////////////////////////
//// Listeners functions
////////////////////////

function dropdownBtnListener(element, parent, before) {
    return element.addEventListener('click', () => {
        const dropdownElement = document.querySelector('.dropdown');
        const valueID = (value.length - 1);


        if (dropdownElement) {
            dropdownElement.remove();
        } else {
            dropdown(element, before);
            document.getElementById('op1').addEventListener('click', () => {
                const node = parent.querySelector('.nodeName');
                if (node) {
                    createError(text = 'name nodes.');
                } else {
                    createNode(parent, before, 'nodeName', 'w');
                    getNodeData(valueID, parent, 'nodeName', '.w')
                }
            });
            document.getElementById('op2').addEventListener('click', () => {
                const node = parent.querySelector('.attribute');
                if (node) {
                    createError(text = 'attribute nodes.');
                } else {
                    createAttr(parent, before);
                    getAttrData(valueID, parent, '.key', '.value')
                }
            });
            document.getElementById('op3').addEventListener('click', () => {
                createError(text = 'child nodes. At the moment child nodes does not work. ');
                // TO DO
                // createChild(parent)
            });
            document.getElementById('op4').addEventListener('click', () => {
                const node = parent.querySelector('.textContent');
                if (node) {
                    createError(text = 'text nodes.');
                } else {
                    createNode(parent, before, 'textContent', 'e');
                    getNodeData(valueID, parent, 'textContent', '.e')
                }
            })
        }
    })
}

function AttrBtnListener(element, parent, before) {
    return element.addEventListener('click', () => {
        // createError(text = 'attribute. At the moment more than one attribute does not work. ');
        // TO DO
        // const valueID = (attrArray.length - 1);
        createAttributeKey(parent, before)
        // ziu(valueID, parent, '.key', '.value')
        // attrArray.push(new Object);
    })
}

/////////////////////
//// Create Functions
/////////////////////

function create(parent, before) {
    const
        element = document.createElement('span');
    element.innerText = 'witam';
    parent.insertBefore(element, before);
}
/////////////////////
/////////////////////

function createNode(parent, before, spanText, classID) {
    const
        element = document.createElement('div'),
        tpl = `<span class="${spanText}">${spanText}</span>
        <input class="${classID}" type="text" placeholder="name">`
    element.insertAdjacentHTML("afterbegin", tpl)

    parent.insertBefore(element, before);

}

function createAttr(parent, before) {
    const
        element = document.createElement('div'),
        div = document.createElement('div'),
        tpl = `<span>attributes</span>
        <div>
            <input class="key" type="text" placeholder="key">
            <input class="value" type="text" placeholder="value">
        </div>`,
        button = document.createElement('button');

    element.setAttribute('class', 'attribute');
    button.setAttribute('class', 'button');
    button.innerText = '+';

    AttrBtnListener(button, element, button);
    attrArray.push(new Object);

    element.insertAdjacentHTML("afterbegin", tpl)
    element.appendChild(div);
    element.appendChild(button);

    parent.insertBefore(element, before);
}

function createAttributeKey(parent, before) {
    const
        element = document.createElement('div'),
        tpl = `<input class="key" type="text" placeholder="key">
        <input class="value" type="text" placeholder="value">`;

    element.insertAdjacentHTML("afterbegin", tpl)

    parent.insertBefore(element, before);

    const valueID = (attrArray.length - 1);
    getAttrData(valueID, element, '.key', '.value')
}

function createError(text = '') {
    const
        element = document.createElement('div'),
        span = document.createElement('span');

    element.setAttribute('class', 'error')
    span.innerHTML = '<i class="fas fa-times-circle"></i> ERROR, You cannot have more than one ' + text;
    element.appendChild(span)
    document.body.appendChild(element);

    const interval = setInterval(() => {
        element.remove();
    }, 4000);

    interval;
}

function dropdown(parent) {
    const
        div = document.createElement('div'),
        tpl = `<button id="op1" class="option">Node name</button>
        <button id="op2" class="option">Attributes</button>
        <button id="op3" class="option">Child</button>
        <button id="op4" class="option">Text</button>`;

    div.setAttribute('class', 'dropdown active');
    div.insertAdjacentHTML("afterbegin", tpl)
    parent.appendChild(div);
}

function createChild(parent) {
    const
        parentMotyw = parent,
        div = document.createElement('div'),
        divDwa = document.createElement('div'),
        button = document.createElement('button');

    button.setAttribute('class', 'button');
    button.innerText = '+';
    divDwa.appendChild(button);
    dropdownBtnListener(button, divDwa, button);

    div.setAttribute('class', 'firstWrapper');
    div.appendChild(divDwa);
    parentMotyw.appendChild(div);
}