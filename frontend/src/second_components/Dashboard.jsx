// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCurrentUser } from '../redux/action/authAction';
// import { Link } from 'react-router-dom';
// import Projects from './Projects';
// import NewProject from './New_project';
// import Reports from './Reports';
// import BudgetManagement from './Budget_management';
// import PartnerManagement from './Partener_management';
// import ProjectEvaluation from './Project_evaluation';
// import ProjectMap from './Project_map';
// import ContactUs from './Contact';
// import Notifications from './Notifications';

// function Dashboard() {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.users.user);

//   useEffect(() => {
//     dispatch(getCurrentUser());
//   }, [dispatch]);

//   if (!user) {
//     return (
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/reports">Reports</Link>
//             </li>
//             <li>
//               <Link to="/project_map">Project Map</Link>
//             </li>
//             <li>
//               <Link to="/contact-us">Contact Us</Link>
//             </li>
//           </ul>
//         </nav>
//         <Notifications/>
//       </div>
//     );
//   }

//   if (user.role === 'admin') {
//     return (
//       <div>
//         <NewProject />
//         <Reports />
//         <BudgetManagement />
//         <PartnerManagement />
//         <Notifications/>
//       </div>
//     );
//   }

//   if (user.role === 'user') {
//     return (
//       <div>
//         <Projects />
//         <ProjectEvaluation />
//         <ProjectMap />
//         <ContactUs />
//         <Notifications />
//       </div>
//     );
//   }
// }

// export default Dashboard;
