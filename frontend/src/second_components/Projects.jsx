import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects, updateProject } from '../redux/action/actionProject';
import './Projects.css';
import { useNavigate } from 'react-router-dom';
import ProjectModal from './ProjectModal';

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);
  const [editedProject, setEditedProject] = useState(null);
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const user = useSelector(state => state.users.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  

  const handleFileOpen = (fileName, userId) => {
    // Implement file opening logic
    console.log(`Opening ${fileName} uploaded by user ${userId}`);
  };

  return (
    <div className="form-container">
      <h1>PROJECTS</h1>
      <hr />
      {projects.map((project) => (
        <div key={project._id} style={{ background: 'white' }}>
          <h2 style={{ color: 'black' }}>{project.name}</h2>
          <p>Budget: {project.budget}</p>
          <p>Place: {project.place}</p>
          <p>Description: {project.description}</p>
          <p>Period: {project.period}</p>
          <p>Progress: {project.progress}</p>
          <p>Phases: {project.phases}</p>
          {user.role === "user" && (
            <div>
              
            <ProjectModal project={project}/>
            </div>

          )}
          {user.role === "admin" && (
            <div style={{ color: "blue",marginTop:"30px" }}>
             
              <a id="btn" href={`/projectdetails/${project._id}`}>
                View details
              </a>
              <ul>
                
              </ul>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Projects;
