const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    // response.send('<h1>Hello Express!</h1>');
    response.send({
        name: 'April',
        likes: [
            'ponies',
            'ice cream'
        ]
    });
});

app.get('/about', (request, response) => {
    response.send('About Page');
})

// /bad send back json with an error message property
app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to handle request.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});