const mongoose = require('mongoose');

const demos = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('demos', demos)