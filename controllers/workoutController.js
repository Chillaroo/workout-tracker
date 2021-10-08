const { Workout, Exercise } = require('../models');

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
        Workout.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
            { new: true }
        )
            .then((newExercise) => res.json(newExercise))
            .catch((err) => res.status(500).json(err))
    },
    getWorkoutsInRange(req, res) {
        //do aggregate on Workout model and then slice
        Workout.aggregate([
            {
                $sort: { day: -1 }
            },
            {
                $limit: 7
            },
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            },
        ])
            .then((workouts) => {
                return res.json(workouts);
            })
            .catch((err) => res.status(500).json(err));
    }
}