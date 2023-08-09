
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Mike' },
    { id: 5, name: 'Mary' },
    { id: 6, name: 'Adam' },
    { id: 7, name: 'Eve' },
    { id: 8, name: 'Donald' },
    { id: 9, name: 'Barack' },
    { id: 10, name: 'George' },
    { id: 11, name: 'Bill' },
    { id: 12, name: 'Hillary' },
    { id: 13, name: 'Joe' },
    { id: 14, name: 'Kamala' },
    { id: 15, name: 'Nancy' },
    { id: 16, name: 'Mitch' },
    { id: 17, name: 'Bernie' },
    { id: 18, name: 'Elizabeth' },
    { id: 19, name: 'Pete' },
    { id: 20, name: 'Amy' },
]


app.get('/users', (req, res) => {
    res.send(users);
}
);


app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.send(user);
    }
}
);


app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.send(user);
}
);


app.put('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('User not found');
    } else {
        user.name = req.body.name;
        res.send(user);
    }
}
);


app.delete('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('User not found');
    } else {
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.send(user);
    }
}
);

//run the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

