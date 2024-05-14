const express = require("express");
const { addProject, getProjects, getOneProject, updateProject, deleteProject, getMyProjects } = require("../controller/project_controller");
const projectRouter = express.Router();

projectRouter.post("/project/add", addProject);
projectRouter.get("/project/get", getProjects);
projectRouter.get("/project/:id", getOneProject);
projectRouter.put("/project/update/:id", updateProject);
projectRouter.delete("/project/delete/:id", deleteProject);
projectRouter.post("/project/MyProjects/", getMyProjects);

module.exports = projectRouter;
