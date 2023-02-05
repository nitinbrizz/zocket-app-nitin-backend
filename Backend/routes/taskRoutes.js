const express = require("express");
const {createTask,getTasks,getTask,getPics, delTask, updateTask, createPic} = require("../controllers/taskControllers");
const router = express.Router();

router.post("/api/tasks",createTask);
router.post("/api/pics",createPic);
router.get("/api/tasks",getTasks);
router.get("/api/pics",getPics);
router.get("/api/tasks/:id",getTask);
router.delete("/api/tasks/:id",delTask);
router.patch("/api/tasks/:id",updateTask);

module.exports = router;