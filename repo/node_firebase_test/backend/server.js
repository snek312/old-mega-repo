const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(express.json()) // for parsing application/json
app.use(cors())

const fakeDB = {
    name: {
        test: 'test',
        test2: 'test2'
    }
}


app.get('/api', (req, res) => {
    console.log('Witam w api');
    res.json(fakeDB)
})

app.post('/api', (req, res) => {
    console.log('Witam, post');
    const data = JSON.stringify(req.body);
    console.log('Data recived = ' + data)
    res.json(req.body)

    // res.send('Posted')
})

app.listen(port, () => console.log(`Serwer nakurwia na porcie ${port}`))