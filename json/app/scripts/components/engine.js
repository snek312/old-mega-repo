let value = [];
let obj = {};
let array = [];
let attrArray = [];


const generateButton = document.getElementById('id-generate');
generateButton.addEventListener('click', () => {
    document.getElementById('id-preview').innerText = JSON.stringify(value);
})

const downloadButton = document.getElementById('id-download');
downloadButton.addEventListener('click', () => {
    const
        toJSON = JSON.stringify(value),
        filename = document.getElementById('id-fileName').value;
    download(filename + '.json', toJSON);
})

function getNodeData(valueID, element, name, classID) {
    const generateButton = document.getElementById('id-generate');
    generateButton.addEventListener('click', () => {
        const getValue = element.querySelector(classID).value;
        array[valueID][name] = getValue;
        value[valueID] = array[valueID];
    })

}

function ziu(valueID, element, classKey, classValue) {
    const getKey = element.querySelector(classKey).value;
    const getValue = element.querySelector(classValue).value;
    attrArray[valueID][getKey] = getValue;
}

function getAttrData(valueID, element, classKey, classValue) {
    const generateButton = document.getElementById('id-generate');
    generateButton.addEventListener('click', () => {
        ziu(valueID, element, classKey, classValue)
        array[valueID].attributes = attrArray[valueID];
        value[valueID] = array[valueID];
    })
}