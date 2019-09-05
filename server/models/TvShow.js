const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TvShowSchema = new Schema({
	Title: {
		type: String,
		required: true
	},
	short: {
		type: Array,
		required: true
    },
    average: {
		type: Array,
		required: true
    },
    long: {
		type: Array,
		required: true
    }, 
});

module.exports = mongoose.model('TvShow', TvShowSchema);
