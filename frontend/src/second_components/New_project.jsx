// NewProject.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../redux/action/actionProject';
import './New_project.css';

function NewProject() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);
  const [name, setName] = useState('');
  const [budget, setBudget] = useState();
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [period, setPeriod] = useState('');
 
  const [phases, setPhases] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      name,
      budget,
      place,
      description,
      period,
      phases
    };
    dispatch(addProject(projectData)); // Pass the project data to the parent component
    
    setName('');
    setBudget(0);
    setPlace('');
    setDescription('');
    setPeriod('');
    
    setPhases('');
  };

  return (
    <div className="form-container">
      <p style={{color:"white", justifyContent:"center", display:"flex", fontSize:"2rem"}}>ADD NEW PROJECT</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name of project</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget of project</label>
          <textarea
            name="budget"
            id="budget"
            rows={5}
            cols={50}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place of project</label>
          <textarea
            name="place"
            id="place"
            rows={5}
            cols={50}
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description of project</label>
          <textarea
            name="description"
            id="description"
            rows={5}
            cols={50}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="period">Period of project</label>
          <textarea
            name="period"
            id="period"
            rows={5}
            cols={50}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phases">Phases of project</label>
          <textarea
            name="phases"
            id="phases"
            rows={5}
            cols={50}
            value={phases}
            onChange={(e) => setPhases(e.target.value)}
            required
          />
        </div>
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewProject;
