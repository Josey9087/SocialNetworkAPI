const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  addFriends,
  removeFriends,
  updateUser,
  deleteUser,
} = require("../../controllers/userControllers");

router.route("/").get(getUsers).post(createUser);

router
  .route("/:userId")
  .get(getOneUser)
  .patch(updateUser)
  .delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(addFriends)
  .delete(removeFriends);

module.exports = router;