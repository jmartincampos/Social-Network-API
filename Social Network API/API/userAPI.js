const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/user-controller');

// Route to get all users
router.route('/')
  .get(getAllUsers);

// Route to get a single user by id
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Route to add or remove a friend
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
