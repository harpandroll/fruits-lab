const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log ("Serving up delicious fruits on port ${PORT}"))

//Routes
app.get('/hello', (req,res) => {
    console.log('hello world!')
    res.send('hello world!')
});

app.get('/greet/:name',(req, res) => {
    const person = req.params.name;
    res.send('Why hello there ' +person);
});

app.get('/five', (req,res) => {
    const arrfive = [1,2,3,4,5];
    res.send(arrfive);
});

app.get('/fruits/:name', (req,res) => {
    const fruitbowl =['apples','oranges','peaches','pears', 'bananas'];
    const selectedfruit =req.params.name;
    console.log('selected fruit =',selectedfruit);
    //(console.log('identified =',fruitbowl.find(selectedfruit)));
    const found = fruitbowl.find(element => element == selectedfruit);
    console.log('found =', found);
    res.send(found);
}) ;

//veggies array
app.get('/veggies', (req,res) => {
    const vegetables = ['corn', 'green beans', 'carrots', 'peas', 'broccoli'];
    res.send(vegetables);
});


//veggies individual
app.get('/myveg/:name', (req,res) => {
    const vegetables = ['corn', 'green beans', 'carrots', 'peas', 'broccoli'];
    const selectedveg =req.params.name;
    console.log('selected veg =',selectedveg);
    //(console.log('identified =',vegetables.find(selectedveg)));
    const foundveg = vegetables.find(element => element == selectedveg);
    console.log('found veg =', foundveg);
    res.send(foundveg);
}) ;





//Bonus - Sorted fruits array
app.get('/fruitordered', (req,res) => {
    const fruitbowl = ['bananas','apples', 'peaches','oranges','pears',];
    const sortfruit = fruitbowl.sort();
    console.log('sorted fruit =', sortfruit)
    res.send(sortfruit);
});
