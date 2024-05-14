import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Myprojects.css'
import ProgressModal from './ProgressModal';
import { getmyProject, getoneProject } from '../redux/action/actionProject';

function Myprojects({data}) {
  
  console.log(data)
  const [projects, setProjects]=useState([])
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(getmyProject(data))
  }, [data])
  const myprojects = useSelector(state => state.projects.myprojects);
  console.log(myprojects)
  return (
    <div >
      {myprojects?.map(e=>

        <div>
         <div className="card" style={{width:"24rem", height:"90%"}}>
  <div className="card-details">
    <p className="text-title">Name: {e.name}</p>
    <p className="text-body">Budget: {e.budget}</p>
    <p className="text-body">Place: {e.place}</p>
    <p className="text-body">Description: {e.description}</p>
    <p className="text-body">Period: {e.period}</p>
    <p className="text-body">Progress: {e.progress}</p>
    <p className="text-body">Phases: {e.phases}</p>
    

  </div>
  
  <ProgressModal  project={e}/>
</div> 

        </div>








      )}





    </div>
  )
}

export default Myprojects