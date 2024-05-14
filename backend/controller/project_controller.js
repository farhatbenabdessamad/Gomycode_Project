const Project = require('../model/ProjectModel');

// Controller pour créer un nouveau projet
exports.addProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller pour récupérer tous les projets
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller pour récupérer un projet par son ID
exports.getOneProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller pour mettre à jour un projet
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      project.set(req.body);
      await project.save();
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller pour supprimer un projet
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      await project.remove();
      res.status(200).json({ message: 'Project deleted' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getMyProjects = async (req, res) => {
  const {data}=req.body
  try {
    const projects = await Project.find({ _id: { $in: data } });
    if (projects) {
      res.status(200).json(projects);
    } else {
      res.status(404).json({ message: 'Projects not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

