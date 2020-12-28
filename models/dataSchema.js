const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    dueDate: { type: String }
});

module.exports = mongoose.model('toDoList', listSchema);
