const router = require("express").Router();
const spriteController = require("../../controllers/spriteController");


// // Matches with "/api/sprite"
router.route("/:id?")
  .get(spriteController.findAll)
  .post(spriteController.create);



module.exports = router;
