import React, { useState, useEffect } from 'react';
import './PartnerManagement.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function PartnerManagement() {
  const [partners, setPartners] = useState([]);
  const [newPartner, setNewPartner] = useState({ name: '', email: '', country: '' });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleNewPartnerChange = (e) => {
    setNewPartner({ ...newPartner, [e.target.name]: e.target.value });
  };

  const handleAddPartner = (e) => {
    e.preventDefault();
    const partner = { id: Date.now(), ...newPartner, date: new Date().toLocaleDateString() };
    setPartners([...partners, partner]);
    setNewPartner({ name: '', email: '', country: '' });
  };

  return (
    <section className="py-12 py-lg-24 bg-light" data-aos="zoom-out-left">
      <div className="container text-center" >
        <div className="mb-16" >
          <p className="lead fw-semibold mb-0" >Among our partners for this Organization</p>
        </div>
      </div>
      <div className="container" data-aos="zoom-out-left">
        <div className="row mb-n12">
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center" >Toyota</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/512px-Toyota_carlogo.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">Amazon</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}          
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">Microsoft</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">Apple</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">Coca-Cola</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/512px-Coca-Cola_logo.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">Nike</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/512px-Logo_NIKE.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">McDonald's</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/512px-McDonald%27s_Golden_Arches.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">IBM</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">BMW</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/512px-BMW.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">Adidas</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/512px-Adidas_Logo.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">Audi</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/512px-Audi-Logo_2016.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-12">
            <p className="lead fw-semibold mb-0 text-center">KFC</p>
            <img
              className="img-fluid d-block mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/KFC_logo.svg/512px-KFC_logo.svg.png"
              alt=""
              style={{width:"150px", height:"30px", marginBottom:"20px"}}
            />
          </div>
        </div>
      </div>
      <div className="container mt-16">
        <p className="lead fw-medium text-secondary-dark text-center">
          Join a growing organization of satisfied customers who have made the switch.
        </p>
      </div>
    </section>
  );
}

export default PartnerManagement;
