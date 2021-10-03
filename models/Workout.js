const {Schema, model} = require('mongoose');

//Schema to create Exercise model
const workoutSchema = new Schema (
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
const Workout = model('workout', workoutSchema);

module.exports = Workout;