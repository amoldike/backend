const express = require("express");

const router = express.Router();

// get all users data
router.get("/", require("./../controllers/users").getUsers);

// get user data
router.get("/:userId", require("./../controllers/users").getUser);

//to save the users data
router.post("/", require("./../controllers/users").postUser);

//to update the users data
router.put("/:userId", require("./../controllers/users").updateUser);

//to delete the users data
router.delete("/:userId", require("./../controllers/users").deleteUser);

module.exports = router;
