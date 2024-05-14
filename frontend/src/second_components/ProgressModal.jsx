import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateProject } from '../redux/action/actionProject';

function ProgressModal({project}) {
  const [show, setShow] = useState(false);
  const dispatch =useDispatch()
  const [images, setImages]=useState([]);
  const [description, setDescription]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(project)
const handelSubmit=async()=>{
    const array =[]
    if (images.length>0){
        for(var i=0; i<images.length; i++){
            const obj=new FormData()
            obj.append("file",images[i])
            obj.append("upload_preset","ml_default")
            const res=await axios.post("https://api.cloudinary.com/v1_1/dlssfzsua/upload",obj)
            array.push(res.data.url)
        }
      
         dispatch (updateProject(project._id,{evaluation:[...project.evaluation,{images:array,description:description}]})) 
        
    }else{
        alert("you must attach photos with the report (example: invoice, estimate, etc...)")
    }
handleClose()
  }
  return (
    <>
      <button className="card-button" onClick={handleShow}>
        Project Progress
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Files</Form.Label>
              <Form.Control
                type="file"
                placeholder="Select files"
                multiple={true}
                onChange={(e)=>setImages(e.target.files)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} 
              onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            Send Report
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProgressModal;
