const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    // return new Date().getFullYear();
    return ' I love socks';
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (request, response) => {
    // response.send('<h1>Hello Express!</h1>');
    response.render('home.hbs', {
        welcomeMessage: 'Welcome to this page',
        pageTitle: 'Home page',
    })
});

app.get('/about', (request, response) => {
   response.render('about.hbs', {
       pageTitle: 'About page',
   });
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