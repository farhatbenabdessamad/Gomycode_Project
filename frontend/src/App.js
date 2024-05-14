// App.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './first_components/Header';
import Home from './first_components/Home'; // Nouveau composant pour la page d'accueil
import './App.css';
import Loguin from './first_components/Loguin';
import NewProject from './second_components/New_project';
import PartnerManagement from './second_components/Partener_management';
import Contact from './second_components/Contact';
import Reports from './second_components/Reports';
import Projects from './second_components/Projects'; // Nouveau composant Projects
import Budgetmanage from './second_components/Budget_management';
import Dashboard from './second_components/Dashboard';
import ProjectDetails from './second_components/ProjectDetails';
import Myprojects from './second_components/Myprojects';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './redux/action/authAction';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const user = useSelector(state => state.users.user);
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container" style={{marginTop:"15%"}}>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Loguin/>}/>
              <Route path="/new-project" element={<NewProject />}/>
              <Route path="/partners" element={<PartnerManagement/>}/>
              <Route path="/contact-us" element={<Contact/>}/>
              <Route path="/reports" element={<Reports/>}/>
              <Route path="/projects" element={<Projects/>}/> // Ajout de la route pour le composant Projects
              <Route path="/budget" element={<Budgetmanage/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/myprojects" element={<Myprojects data={user?.projects}/>}/>
              <Route path="/projectdetails/:id" element={<ProjectDetails/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
