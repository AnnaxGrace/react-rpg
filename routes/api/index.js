const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const spriteRoutes = require("./sprite");
const storyRoutes = require("./storyRoute")


// user routes
router.use("/signup", userRoutes);
router.use("/sprite", spriteRoutes);
router.use("/story", storyRoutes);
router.use("/user", userRoutes);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
