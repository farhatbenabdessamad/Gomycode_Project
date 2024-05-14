import React, { useEffect } from 'react';
import Carousel from './CustomCarousel'; // Par exemple, un composant de carrousel
import FeaturedProjects from './FeaturedProjects'; // Un composant pour les projets en vedette
import Testimonials from './Testimonials'; // Un composant pour les témoignages
import './Home.css'; // Import the CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div className="home">

      <h1>
        <span style={{ color: "black", fontSize: "5rem", fontFamily: "Papyrus, fantasy" }}>Welcome to our project</span>{" "}
        <span style={{ color: "blueviolet", fontSize: "5rem", fontFamily: "Papyrus, fantasy" }}>tracking platform</span>
      </h1>
      <hr />
      <Carousel />
      <FeaturedProjects />
      <Testimonials />
      <p className="content"> Our project tracking platform offers a comprehensive range of features to meet your project management needs. With a user-friendly interface and powerful tools, we enable you to efficiently plan, track, and manage every aspect of your projects from start to finish. Thanks to our advanced planning system, you can create detailed schedules, set clear deadlines, and allocate resources optimally. Our task tracking feature allows you to monitor the progress of each project stage, identify potential delays, and take timely corrective actions. Team collaboration is at the heart of our platform, with integrated communication tools, shared workspaces, and real-time commenting features. You can easily assign tasks, share files, and coordinate your team's efforts, no matter where you are. Additionally, our platform automatically generates detailed reports on project progress, expenses, resource utilization, and more. These reports help you assess your project's performance, identify areas for improvement, and make informed decisions for the future. Whether you're leading a small local project or a global initiative, our project tracking platform is the ideal tool to ensure success. With our assistance at every step of the process, you can achieve your goals faster, more efficiently, and with less stress.
      </p>
      <img
        style={{ width: "100%" }}
        alt="FR management Header"
        className="jsx-4212101279 main-image regular-asset-image"
        src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Languages/French/work management LP/FR_management_Header.png"
      />
      <hr />
      <div style={{ background: "#E8F6FF" }}>
        <div className="container">
          <div className="image" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="https://kissflow.com/hs-fs/hubfs/why-is-project-management-important.jpg?height=488&name=why-is-project-management-important.jpg" alt="" />
          </div>
          <div className="description" data-aos="fade-left">
            <ul>
              <li>  Achieving goals: Completing projects within scope, time, and budget.</li>
              <li>Resource optimization: Efficiently using time, money, personnel, and materials.</li>
              <li>Risk management: Identifying and mitigating potential risks to prevent project failure.</li>
              <li>Continuous improvement: Learning from past projects to enhance future ones.</li>
              <li>Stakeholder satisfaction: Meeting stakeholders' needs through effective communication.</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="image" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src="https://blog.hubspot.com/hs-fs/hubfs/project%20management%20phases.png?width=1600&height=970&name=project%20management%20phases.png" alt="" />
          </div>
          <div className="description" data-aos="fade-left">
            <ul>
              <li>Initiation Phase: Define project scope and stakeholders, and develop the project charter.</li>
              <li>Planning Phase: Define objectives, create a detailed project plan, and obtain approvals.</li>
              <li>Execution Phase: Implement the plan, coordinate resources, and manage risks and quality.</li>
              <li>Monitoring and Controlling Phase: Track performance, manage changes, and ensure objectives are met.</li>
              <li>Closing Phase: Formalize deliverable acceptance, handover, document lessons, and close contracts.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
