import React, { useState } from 'react';
import './Reports.css';

function Reports({ projects }) {
  const [reports, setReports] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    const project = projects.find((p) => p._id === e.target.project.value);
    if (project) {
      const newReport = {
        title: e.target.title.value,
        description: e.target.description.value,
        date: new Date().toLocaleDateString(),
        projectName: project.name,
        projectId: project._id,
      };
      setReports([...reports, newReport]);
      e.target.reset();
    }
  };

  const handleDelete = (index) => {
    const updatedReports = [...reports];
    updatedReports.splice(index, 1);
    setReports(updatedReports);
  };

  return (
    <div className="reports-container">
      <h1>Reports</h1>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label htmlFor="project">Select Project:</label>
          <select id="project" name="project">
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" className="form-control" id="title" name="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea className="form-control" id="description" name="description" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="reports-list">
        {reports.map((report, index) => (
          <div key={index} className="report">
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <p><small>{report.date}</small></p>
            <p>Project: {report.projectName}</p>
            <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;
