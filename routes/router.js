const route = require('express').Router();
const {
    createDemos,
    getDemos
} = require('../controller/demos');
route

.get('/home', (req, res) => {
    res.send("Hello World");
})

route.post('/demos', createDemos)
.get('/demos', getDemos)

module.exports = route