const express = require('express');
const app = express();

app.use(express.json());

let people = [
    {
        name: 'David',
        age: 26
    },
    {
        name: 'Lucia',
        age: 22
    }
];

app.get('/people', (req, res) => {
    res.json(people);
});

app.post('/people', (req, res) => {
    let newPerson = {
        name: req.body.name,
        age: req.body.age
    };

    people.push(newPerson);

    res.json(newPerson);
});

app.listen(80, () => {
    console.log('Server running on port 3000');
});