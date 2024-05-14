// ProjectDetails.jsx
import React, { useEffect } from 'react';
import './ProjectDetails.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getoneProject, updateProject } from '../redux/action/actionProject';
import { updateUser } from '../redux/action/authAction';
import CardEvaluation from './CardEvaluation';
import Carousel from 'react-bootstrap/Carousel';
function ProjectDetails() {
    const {id}=useParams()
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getoneProject(id))
    }, [dispatch])
    const project = useSelector((state) => state.projects.project);
    console.log(project)
  
  return (
    <div>
      <>
        <table className="project-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Status</th>
              <th>Email</th>
              <th>Linkedin</th>
              
              <th>Description</th>
              <th>Validate</th>
            </tr>
          </thead>
          <tbody>
            {
                project?.users?.map(e=>
                    <tr>
              <td>{e.name}</td>
              <td>{e.status}</td>
              <td>{e.email}</td>
              <td>
                <a href={e.linkedin} target='_blank'>Profile</a>
              </td>

              <td>{e.description}</td>
              <td>
               {project?.closed===true?
               <span style={{color:"green"}}>done</span>
               :<button
                onClick={()=>{ 
                    dispatch(updateProject(id,{...project,closed:true,users:[{id:e.id, name:e.name,email:e.email,status:e.status,description:e.description,budget:e.budget,linkedin:e.linkedin}]}))
                dispatch(updateUser(e.id,{projects:[...e.projects,project]}))
                
                }
                    
                    }>
                    Yes
                </button>}
              </td>
            </tr>
                )
            }
            
           
          </tbody>
        </table>
        
        
      </>
      
<div style={{display:"flex", gap:"50px", justifyContent:"center", flexWrap:"wrap", marginTop:"10%"}}>
<h1>Project reports  </h1>
<Carousel>
  {project?.evaluation?.map(e=>
    <Carousel.Item>
    <CardEvaluation e={e}/>
    </Carousel.Item>
  )}
   </Carousel>
</div>


    </div>
  );
}

export default ProjectDetails;
