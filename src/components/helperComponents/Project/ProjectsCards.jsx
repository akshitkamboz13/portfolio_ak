import React from 'react'
import '../../css/Project.css'

const ProjectsCards = ({ icon, title, description }) => {
    return (
      <div className="card">
        <div className="card-icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    );
  };

export default ProjectsCards
