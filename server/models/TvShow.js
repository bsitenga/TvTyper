const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TvShowSchema = new Schema({
	Title: {
		type: String,
		required: true
	},
	Passages: {
		type: Array,
		required: true
	}
});

module.exports = mongoose.model('TvShow', TvShowSchema);
