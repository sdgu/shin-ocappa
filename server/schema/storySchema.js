const mongoose = require("mongoose");

const storySchema = mongoose.Schema(
{
	title: String,
	desc: String
})

module.exports = storySchema;