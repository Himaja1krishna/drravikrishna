import React, { useState, useEffect } from "react";
import {
  Phone,
  Calendar,
  Star,
  Award,
  Users,
  Heart,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Clock,
  Shield,
  Stethoscope,
  Activity,
  CheckCircle,
  User,
  Mail,
  MessageSquare,
  Trash2,
  Edit,
  BarChart3,
  Home,
  LogOut,
} from "lucide-react";

// Main Appointment Component
const Appointment = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointments, setAppointments] = useState([]);

  // Load appointments from localStorage on component mount
  useEffect(() => {
    const savedAppointments = localStorage.getItem("appointments");
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    }
  }, []);

  // Save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // Appointment form state
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
    status: "Pending",
  });

  const handleBookAppointment = () => {
    setShowAppointmentForm(true);
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      ...appointmentForm,
      id: Date.now(), // Simple unique ID
      date: new Date().toLocaleDateString(),
    };

    setAppointments([...appointments, newAppointment]);

    // Reset form
    setAppointmentForm({
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "",
      reason: "",
      status: "Pending",
    });

    setShowAppointmentForm(false);
    alert("Appointment booked successfully! We will contact you soon.");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm({
      ...appointmentForm,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                Health Clinic
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
              <a
                href="/admin"
                className="text-gray-700 hover:text-blue-600 px-4 py-2"
              >
                Admin Login
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Book Appointment
            </h2>
            <form onSubmit={handleAppointmentSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={appointmentForm.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={appointmentForm.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={appointmentForm.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="preferredDate"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={appointmentForm.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="preferredTime"
                >
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={appointmentForm.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="reason">
                  Reason for Appointment
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={appointmentForm.reason}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={() => setShowAppointmentForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Rest of the website content */}
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20"
      >
        {/* ... existing hero section code ... */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        {/* ... existing about section code ... */}
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        {/* ... existing services section code ... */}
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600">
        {/* ... existing testimonials section code ... */}
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        {/* ... existing appointment section code ... */}
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        {/* ... existing quick links section code ... */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        {/* ... existing footer code ... */}
      </footer>
    </div>
  );
};

// Admin Panel Component
const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminAuth, setAdminAuth] = useState({
    username: "",
    password: "",
  });
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [activeTab, setActiveTab] = useState("dashboard");

  // Load appointments from localStorage on component mount
  useEffect(() => {
    const savedAppointments = localStorage.getItem("appointments");
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    }
  }, []);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Simple authentication (in a real app, this would be a secure server-side authentication)
    if (adminAuth.username === "admin" && adminAuth.password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminAuth({ username: "", password: "" });
  };

  const updateAppointmentStatus = (id, status) => {
    const updatedAppointments = appointments.map((app) =>
      app.id === id ? { ...app, status } : app
    );
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const deleteAppointment = (id) => {
    const updatedAppointments = appointments.filter((app) => app.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  // Calculate statistics
  const getStats = () => {
    const today = new Date().toLocaleDateString();
    const filteredByDate = appointments.filter((app) =>
      selectedDate ? app.preferredDate === selectedDate : true
    );

    const total = filteredByDate.length;
    const pending = filteredByDate.filter(
      (app) => app.status === "Pending"
    ).length;
    const confirmed = filteredByDate.filter(
      (app) => app.status === "Confirmed"
    ).length;
    const completed = filteredByDate.filter(
      (app) => app.status === "Completed"
    ).length;
    const cancelled = filteredByDate.filter(
      (app) => app.status === "Cancelled"
    ).length;

    return { total, pending, confirmed, completed, cancelled };
  };

  const stats = getStats();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Admin Login
          </h1>
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={adminAuth.username}
                onChange={(e) =>
                  setAdminAuth({ ...adminAuth, username: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={adminAuth.password}
                onChange={(e) =>
                  setAdminAuth({ ...adminAuth, password: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
            >
              <Home className="w-4 h-4 mr-2" /> Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <BarChart3 className="text-blue-600 mr-2" />
              <div className="text-2xl font-bold text-blue-600">
                Admin Dashboard
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <LogOut className="w-5 h-5 mr-1" /> Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              className={`py-4 font-medium ${
                activeTab === "dashboard"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`py-4 font-medium ${
                activeTab === "appointments"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("appointments")}
            >
              Appointments
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Date Filter */}
        <div className="mb-6 flex items-center">
          <label htmlFor="date-filter" className="mr-2 font-medium">
            Filter by Date:
          </label>
          <input
            type="date"
            id="date-filter"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          {selectedDate && (
            <button
              onClick={() => setSelectedDate("")}
              className="ml-2 text-sm text-blue-600 hover:text-blue-800"
            >
              Clear Filter
            </button>
          )}
        </div>

        {activeTab === "dashboard" ? (
          /* Dashboard View */
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Appointment Statistics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-gray-800">
                  {stats.total}
                </div>
                <div className="text-gray-500">Total Appointments</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-yellow-600">
                  {stats.pending}
                </div>
                <div className="text-gray-500">Pending</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600">
                  {stats.confirmed}
                </div>
                <div className="text-gray-500">Confirmed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-green-600">
                  {stats.completed}
                </div>
                <div className="text-gray-500">Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-red-600">
                  {stats.cancelled}
                </div>
                <div className="text-gray-500">Cancelled</div>
              </div>
            </div>

            {/* Recent Appointments */}
            <h3 className="text-lg font-semibold mb-4">Recent Appointments</h3>
            {appointments.length === 0 ? (
              <p className="text-gray-600">No appointments yet.</p>
            ) : (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {appointments.slice(0, 5).map((appointment) => (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {appointment.preferredDate}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.preferredTime}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                            ${
                              appointment.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : ""
                            }
                            ${
                              appointment.status === "Confirmed"
                                ? "bg-blue-100 text-blue-800"
                                : ""
                            }
                            ${
                              appointment.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : ""
                            }
                            ${
                              appointment.status === "Cancelled"
                                ? "bg-red-100 text-red-800"
                                : ""
                            }
                          `}
                          >
                            {appointment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          /* Appointments Management View */
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Appointment Management
            </h2>

            {appointments.length === 0 ? (
              <p className="text-gray-600">No appointments yet.</p>
            ) : (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reason
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {appointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.name}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {appointment.phone}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {appointment.preferredDate}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.preferredTime}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 max-w-xs truncate">
                            {appointment.reason}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={appointment.status}
                            onChange={(e) =>
                              updateAppointmentStatus(
                                appointment.id,
                                e.target.value
                              )
                            }
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => deleteAppointment(appointment.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

// Export both components
export { Appointment, AdminPanel };
