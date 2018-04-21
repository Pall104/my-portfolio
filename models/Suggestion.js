var mongoose = require('mongoose');
var SuggestionSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    commentor: String,
    comment: String,
    year: String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Suggestion', SuggestionSchema);