const Task = require("../model/taskModel");
const Pic = require("../model/picModel");

//create a task in db
const createTask = async(req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};
const createPic = async(req,res) =>{
    try {
        const pic = await Pic.create(req.body)
        res.status(200).json(pic);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};
//get all task from db
const getTasks = async(req,res) =>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};
//get pics
const getPics = async(req,res) =>{
    try {
        const pics = await Pic.find()
        res.status(200).json(pics);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};
//get a single task from db
const getTask = async(req,res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task){
            res.status(404).send(`the task with id: ${id} not found`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};

//delete a task
const delTask = async(req,res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            res.status(404).send(`the task with id: ${id} not found`)
        }
        res.status(200).json("task deleted");
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};

//update task
const updateTask = async(req,res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id:id}, req.body, {new:true}
        );
        if(!task){
            res.status(404).send(`the task with id: ${id} not found`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};

module.exports = {
    createTask,
    createPic,
    getTasks,
    getPics,
    getTask,
    delTask,
    updateTask,
};