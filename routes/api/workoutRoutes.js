const router = require('express').Router();
const {
    getLastWorkout,
    addExercise,
    createWorkout,
    getWorkoutsInRange,
} = require('../../controllers/workoutController');

router.route('/workouts').get(getLastWorkout).post(createWorkout);
router.route('/workouts/:id').put(addExercise);
router.route('/workouts/range').get(getWorkoutsInRange);

module.exports = router;