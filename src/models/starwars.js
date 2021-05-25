const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')

const starwarsSchema = new Schema({
	tdata : {type: String}
})

module.exports = mongoose.model('StarWars', starwarsSchema)