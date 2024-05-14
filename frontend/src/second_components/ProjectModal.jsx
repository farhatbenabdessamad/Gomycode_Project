import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../redux/action/actionProject';

function ProjectModal({project}) {
    const user = useSelector(state => state.users.user);
  const [show, setShow] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [linkedin, setLinkedin] = useState("");
  const [status, setStatus] = useState(user.status);
  const [description, setDescription] = useState("");
  const [submited,setSubmited]=useState(false)
  console.log(submited)
  useEffect(() => {
    project.users.map(e=>e.id==user._id? setSubmited(true):submited)
  }, [])
  
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = (e) => {
  e.preventDefault()
dispatch(updateProject(project._id,{...project,users:[...project.users,{id:user._id, name,email,status,description,linkedin,projects:user.projects}]}))
handleClose()
  };
  return (
    <>
      {submited?
      <Button variant="primary" onClick={handleShow} disabled>
      Apply
    </Button>
      
      :
      
      <Button variant="primary" onClick={handleShow}>
        Apply
      </Button>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply to this project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                autoFocus
                onChange={(e)=>setName(e.target.value)}
                defaultValue={user.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>setEmail(e.target.value)}
                defaultValue={user.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Linkedin address</Form.Label>
              <Form.Control
                type="text"
                placeholder="your profile linkedin"
                autoFocus
                onChange={(e)=>setLinkedin(e.target.value)}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>setStatus(e.target.value)}
                defaultValue={user.status}
              />
            </Form.Group>
      
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Plan description</Form.Label>
              <Form.Control as="textarea" rows={3}  onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectModal;