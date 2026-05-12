const express = require('express');
const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
} = require('../controllers/userController');

const router = express.Router();

router.route('/login')
    .post(loginUser);

router.route('/')
    .post(createUser)
    .get(getUsers);

router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
