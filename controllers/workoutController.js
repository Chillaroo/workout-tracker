const {Workout, Exercise} = require('../models');

module.exports = {
    getLastWorkout(req, res) {
        Workout.find()
            .then((workouts) => res.json(workouts))
            .catch((err) => res.status(500).json(err))
    },
    createWorkout(req, res) {
        Workout.create(req.body)
            .then((newWorkout) => res.json(newWorkout))
            .catch((err) => res.status(500).json(err))
    },
    addExercise(req, res) {
        //Exercise.create(req.body)
        //    .then( (exercise) => {
                //return 
                Workout.findOneAndUpdate(
                    { _id: req.params.id },
                    { $push: { exercises: req.body } },
                    { new: true }
                )//;
            //})
            .then((newExercise) => res.json(newExercise))
            .catch((err) => res.status(500).json(err))
    },
    getWorkoutsInRange(req, res) {
        //View the combined weight of multiple exercises from the past seven workouts on the stats page.
        //View the total duration of each workout from the past seven workouts on the stats page.
    }
}