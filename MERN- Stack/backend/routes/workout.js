const express= require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/Workout')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router


//MONGO_URI=mongodb+srv://griffinstanui14:<Griffins@2005>@test.e46b4d5.mongodb.net/?retryWrites=true&w=majority
