(function () {
    // let j = 0;
    // const template = `
    // <div>
    //     <input type="text" name="" id="nodeName" placeholder="nodeName">
    //     <input type="text" name="" id="attributes" placeholder="attributes">
    // </div>
    // `
    // tpl(j, template, 'id-app');

    // document.getElementById(`id-add${j}`).addEventListener('click', () => {
    //     createChildBox(j);
    // })


    // function createChildBox(j) {
    //     const i = j;
    //     j = j + 1;
    //     console.log(i, j)

    //     tpl(j, template, `id-child${i}`);
    //     console.log(i, j)
    //     document.getElementById(`id-add${j}`).addEventListener('click', () => {
    //         createChildBox(j);
    //     })
    // }

    // function tpl(j, string, id) {
    //     const child = document.createElement('div');
    //     const attr = document.createElement('button');
    //     attr.setAttribute('class', 'doc-button')
    //     attr.setAttribute('id', `id-add${j}`)
    //     attr.innerHTML = 'add attributes';
    //     const button = document.createElement('button');
    //     button.setAttribute('class', 'doc-button')
    //     button.setAttribute('id', `id-add${j}`)
    //     button.innerHTML = 'add child';
    //     child.setAttribute('class', 'doc-box');
    //     child.setAttribute('id', `id-child${j}`);
    //     const element = document.getElementById(id);
    //     child.innerHTML = string;
    //     child.appendChild(attr);
    //     child.appendChild(button);
    //     element.appendChild(child);
    // }

    // function getValue(id = '') {
    //     return document.getElementById(id).value;
    // }


    // let
    //     value = [{
    //         "nodeName": "div",
    //         "className": "logo black",
    //         "attributes": {
    //             "class": "logo black"
    //         }
    //     }];
    // value[0].children = {};
    // console.log(value)
    // console.log(JSON.stringify(value));

    // ////////////////////////////////////////
    // const obj = {}
    // let key = 'dupa';
    // let values = 'dupo'

    // obj[key] = values;
    // key = 'dupaa';
    // values = 'dupow'

    // obj[key] = values;

    // console.log(obj);
    // value.push(obj);
    // console.log(value);
    // console.log(JSON.stringify(value));

    // document.getElementById('id-test').addEventListener('click', (e) => {
    //     const name = getValue('id-input');
    //     const node = getValue('nodeName');
    //     const attr = getValue('attributes');
    //     const newItem = new NewValue(node, attr);
    //     value.push(newItem);



    //     download(name + '.json', JSON.stringify(value));
    //     console.log(value);
    // })

}())