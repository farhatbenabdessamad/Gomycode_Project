import React, { useEffect, useRef } from 'react';
import './Contact.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import emailjs from '@emailjs/browser';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-out-cubic',
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_doch6hb','template_mtmaeaa', form.current, 'EBylG6iAIv54RJPev')
      .then(
        (result) => {
          alert('Le message a été envoyé avec succès');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };    
    return (
      <div>
        <div className="container1" style={{ marginTop: '-10px' }}>
          <div
            className="heading text-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 style={{ fontSize: '60px' }}>
              Contact <span style={{ color: '#943ABA', fontWeight: 'bold' }}>Us</span>
            </h2>
            <p>Feel free to reach out to us for any inquiries or collaborations. We're here to help!</p>
          </div>
        </div>
  
        <section className="contact" id="contact" data-aos="flip-left">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="title">
                  <h3>Contact Details</h3>
                  <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
                </div>
                <div className="content">
                  <div className="info">
                    <i className="fas fa-mobile-alt" style={{ color: '#943ABA' }} />
                    <h4 className="d-inline-block">
                      PHONE :<br />
                      <span>+1 (123) 456-7890</span>
                    </h4>
                  </div>
                  <div className="info">
                    <i className="far fa-envelope" style={{ color: '#943ABA' }} />
                    <h4 className="d-inline-block">
                      EMAIL :<br />
                      <span>info@organization.org</span>
                    </h4>
                  </div>
                  <div className="info">
                    <i className="fas fa-map-marker-alt" style={{ color: '#943ABA' }} />
                    <h4 className="d-inline-block">
                      ADDRESS :<br />
                      <span>123 Main Street, City, Country</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-sm-6">
                      <input type="text" className="form-control" placeholder="Your Name" name="from_name" />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" className="form-control" placeholder="Your Email" name="reply_to" />
                    </div>
                    <div className="col-sm-12">
                      <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows={5} id="comment" placeholder="Your Message" name="message" defaultValue={''} />
                  </div>
                  <button className="btn btn-block" style={{ background: '#943ABA' }} type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Contact;
  