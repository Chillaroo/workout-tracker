const {Schema, model} = require('mongoose');

//Schema to create Exercise model
const exerciseSchema = new Schema (
    {
        name: {
            type: String,
        }, 
        type: {
            type: String,
        }, 
        weight: {
            type: Number,
        }, 
        sets: {
            type: Number,
        }, 
        reps: {
            type: Number
        }, 
        duration: {
            type: Number
        }, 
        distance: {
            type: Number
        }
    }
);

//Initialize Exercise model
const Exercise = model('Exercise', exerciseSchema);

module.exports = {exerciseSchema, Exercise};