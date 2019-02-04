function cactusEngine(path = '', jsonFile = '', element_id = '', ) {

    const jsonServer = 'https://snek312.github.io/json/'
    const requestURL = jsonServer + path + '/' + jsonFile;
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseText = 'text';
    request.send();

    request.onload = () => {
        const json = request.response;
        const jsonObj = JSON.parse(json);
        const html_emp = jsonToHtml(jsonObj);
        createElement(html_emp, element_id);
    }

    function jsonToHtml(obj = []) {
        return obj.map(element =>
            `<${element.nodeName} ${getAttributes(element.attributes || '')}>
            ${jsonToHtml(element.children)}
            ${element.textContent || ''}
            </${element.nodeName}>`
        ).join('');

        function getAttributes(attr) {

            return Object.entries(attr).map(item => ` ${item[0]}='${item[1]}'`).join(' ');
        }
    }

    function createElement(htmlString, id = '') {
        const div = document.createElement('div');
        const attr = document.getElementById(id).getAttribute('class');
        div.innerHTML = `${htmlString}`;
        attr ? div.setAttribute('class', attr) : console.log('no class');
        document.getElementById(id).appendChild(div);
    }
}