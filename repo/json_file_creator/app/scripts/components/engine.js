let value = [];
const obj = {};
let key, values;

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