const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from my personal Smarty Smarty Node with auto restart')
})

const users = [
    { id: 1, name: 'Ema Watson', email: 'emawatson@gmail.com', phone: '032634624' },
    { id: 2, name: 'Cody Rhodes', email: 'codyrhodes@gmail.com', phone: '032634624' },
    { id: 3, name: 'Harley Quinn', email: 'harleyquinn@gmail.com', phone: '032634624' },
    { id: 4, name: 'John Cena', email: 'johncena@gmail.com', phone: '032634624' },
    { id: 5, name: 'The Rock', email: 'therock@gmail.com', phone: '032634624' },
    { id: 6, name: 'Roman Reigns', email: 'romanreigns@gmail.com', phone: '032634624' },
    { id: 7, name: 'The Undertaker', email: 'theundertaker@gmail.com', phone: '032634624' },
]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
})

app.get('/fruits/mango/fazlee', (req, res) => {
    res.send('sour sour fazlee flavour')
})


app.listen(port, () => {
    console.log('Listening to port', port);
})
