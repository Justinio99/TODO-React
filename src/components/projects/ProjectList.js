import React from 'react';
import ProjectSummary from './ProjectSummery'
import Link from 'react-router-dom/Link';


const ProjectList = ({projects}) => {
    return (
      <div className="project-list section">
      
        { projects && projects.map(project => {
          return (
            <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project} />
            
            </Link>
  
          )
        })}  
      </div>
    )
  }


 export default ProjectList; 