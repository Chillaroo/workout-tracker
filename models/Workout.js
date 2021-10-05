const {Schema, model} = require('mongoose');
const {exerciseSchema} = require('./Exercise');

//Schema to create Exercise model
const workoutSchema = new Schema (
    {
        day: {
            type: Date
        },
        exercises: [exerciseSchema]
    }
);

//Initialize Exercise model
const Workout = model('workout', workoutSchema);

module.exports = Workout;