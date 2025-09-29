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
} from "lucide-react";

const DrRaviKrishnaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const treatments = [
    "Lung Cancer Treatment",
    "Breast Cancer Treatment",
    "Gastrointestinal Cancer Treatment",
    "Urological Cancer Treatment",
    "Hemato Oncology",
    "Chemotherapy",
    "Immunotherapy",
    "Targeted Therapy",
    "Bone Marrow Transplant",
  ];

  const testimonials = [
    {
      quote:
        "I was treated for breast cancer by Dr. Ravi Krishna, and his patience, advanced treatment, and friendly approach made all the difference. He listens carefully, addresses concerns, and ensures patients feel at ease. I am highly satisfied with his dedication and would recommend him to all my friends and family.",
      name: "Sushmitha Devarashetty",
      condition: "Breast Cancer Patient",
      rating: 5,
    },
    {
      quote:
        "Dr. Ravi Krishna's expertise in hemato-oncology saved my life. His comprehensive approach and 24/7 support made my treatment journey much more manageable. The entire team is incredibly caring and professional.",
      name: "Rajesh Kumar",
      condition: "Blood Cancer Patient",
      rating: 5,
    },
    {
      quote:
        "The personalized care I received was exceptional. Dr. Krishna explained everything clearly, involved my family in decisions, and his evidence-based approach gave me confidence throughout my treatment.",
      name: "Priya Sharma",
      condition: "Lung Cancer Patient",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Personalized Cancer Treatment Plans",
      description:
        "Tailored treatment strategies based on individual patient needs and cancer type",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Second Opinions You Can Trust",
      description:
        "Expert consultation for treatment validation and peace of mind",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Advanced Therapies",
      description:
        "Chemotherapy, Immunotherapy, and Targeted Therapy with latest protocols",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "24/7 Patient Support",
      description:
        "Round-the-clock care and emergency support for all patients",
    },
  ];

  const cancerTypes = [
    {
      name: "Lung Cancer",
      icon: "🫁",
      description:
        "Comprehensive lung cancer care with latest treatment options",
    },
    {
      name: "Breast Cancer",
      icon: "🎗️",
      description: "Personalized breast cancer treatment with holistic support",
    },
    {
      name: "Blood Cancer",
      icon: "🩸",
      description:
        "Specialized hemato-oncology services and bone marrow transplant",
    },
    {
      name: "GI Cancer",
      icon: "🫄",
      description: "Advanced gastrointestinal cancer treatment protocols",
    },
    {
      name: "Urological Cancer",
      icon: "🔬",
      description: "Expert care for kidney, bladder, and prostate cancers",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                Dr. Ravi Krishna
              </div>
              <div className="ml-2 text-sm text-gray-600 hidden sm:block">
                Medical Oncologist
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Us
              </a>
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setActiveDropdown("treatments")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Treatments <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeDropdown === "treatments" && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-10"
                    onMouseEnter={() => setActiveDropdown("treatments")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {treatments.map((treatment, idx) => (
                      <a
                        key={idx}
                        href="#treatments"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        {treatment}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center text-blue-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">+91 89298 33661</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Book Appointment
              </button>
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700">
                Home
              </a>
              <a href="#about" className="block py-2 text-gray-700">
                About Us
              </a>
              <a href="#treatments" className="block py-2 text-gray-700">
                Treatments
              </a>
              <a href="#services" className="block py-2 text-gray-700">
                Services
              </a>
              <a href="#contact" className="block py-2 text-gray-700">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Top Oncologist in Hyderabad,
                <span className="text-blue-600">
                  {" "}
                  Fast Appointments & Quality Care
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dr. Ravi Krishna is a leading medical oncologist in Hyderabad,
                known for delivering personalized cancer care with a focus on
                trust, empathy, and evidence-based treatment. With expertise
                from AIIMS, New Delhi, he blends clinical precision with a
                patient-first approach that simplifies complex cancer journeys.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Book Consultation
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Stethoscope className="w-16 h-16 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Dr. Ravi Krishna
                  </h3>
                  <p className="text-gray-600 mb-4">
                    DM Oncology, AIIMS New Delhi
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        180+
                      </div>
                      <div className="text-sm text-gray-600">
                        Happy Patients
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        795+
                      </div>
                      <div className="text-sm text-gray-600">
                        Successful Therapies
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">8+</div>
                      <div className="text-sm text-gray-600">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Dr. Ravi Krishna
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A distinguished medical oncologist with extensive training from
              AIIMS, New Delhi, dedicated to providing compassionate and
              comprehensive cancer care.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-600 mb-2">180+</h3>
              <p className="text-gray-700 font-semibold">Happy Patients</p>
              <p className="text-sm text-gray-600 mt-2">
                Successfully treated patients across various cancer types
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 text-center">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">795+</h3>
              <p className="text-gray-700 font-semibold">
                Successful Therapies
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Advanced treatment protocols with proven results
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 text-center">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600 mb-2">8+</h3>
              <p className="text-gray-700 font-semibold">Years of Experience</p>
              <p className="text-sm text-gray-600 mt-2">
                Extensive expertise in medical oncology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Cancer Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From diagnosis to recovery, we provide end-to-end oncology
              services with a patient-centered approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Specialized Cancer Treatments
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {cancerTypes.map((cancer, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{cancer.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {cancer.name}
                  </h4>
                  <p className="text-sm text-gray-600">{cancer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Patients Think About Us
            </h2>
            <p className="text-xl text-blue-100">
              Real experiences from patients who trusted us with their care
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900 text-xl">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-blue-600">
                    {testimonials[currentTestimonial].condition}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentTestimonial ? "bg-white" : "bg-blue-400"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Book an Appointment
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Avoid the wait. Schedule your consultation with Dr. Ravi
                Krishna, a leading cancer specialist in Hyderabad, at your
                convenience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    DM Oncology, AIIMS New Delhi
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Personalized, evidence-based cancer care
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Treatment for all cancer types
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    24/7 patient support available
                  </span>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Request an Appointment
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                24/7 Patient Support
              </h3>
              <p className="text-gray-600 mb-6">
                From queries to emergencies—we're here for you round the clock.
                Get expert help, anytime.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Emergency Consultation</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">24/7 Medical Support</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Ongoing Patient Care</span>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mt-6 transition-colors">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Links
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Hemato Oncology",
              "Urological Cancer Treatment",
              "Gastrointestinal Cancer Treatment",
              "Breast Cancer Treatment",
              "Lung Cancer Treatment",
            ].map((link, idx) => (
              <a
                key={idx}
                href="#treatments"
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {link}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Ravi Krishna</h3>
              <p className="text-gray-400 mb-4">
                Leading Medical Oncologist in Hyderabad
              </p>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 89298 33661</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                WhatsApp Us
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              Copyright 2025 Dr. Ravi Krishna. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DrRaviKrishnaWebsite;
