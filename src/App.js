import "./styles.css";
//import DrRaviKrishnaWebsite from "./home";

import AppointmentSystem from "./Appointment1";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Appointment, AdminPanel } from "./appointment";
export default function App() {
  return (
    <AppointmentSystem></AppointmentSystem>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Appointment />} />
    //     <Route path="/admin" element={<AdminPanel />} />
    //   </Routes>
    // </Router>
  );
}
