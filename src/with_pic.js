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
import { motion, AnimatePresence } from "framer-motion";

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const DrRaviKrishnaWebsite1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      <motion.header
        className="bg-white shadow-lg sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-2xl font-bold text-blue-600">
                Dr. Ravi Krishna
              </div>
              <div className="ml-2 text-sm text-gray-600 hidden sm:block">
                Medical Oncologist
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {["Home", "About Us", "Treatments", "Services", "Contact"].map(
                (item, index) => (
                  <motion.div key={item}>
                    {item === "Treatments" ? (
                      <div className="relative">
                        <motion.button
                          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                          onMouseEnter={() => setActiveDropdown("treatments")}
                          onMouseLeave={() => setActiveDropdown(null)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Treatments <ChevronDown className="ml-1 w-4 h-4" />
                        </motion.button>
                        <AnimatePresence>
                          {activeDropdown === "treatments" && (
                            <motion.div
                              className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-10"
                              onMouseEnter={() =>
                                setActiveDropdown("treatments")
                              }
                              onMouseLeave={() => setActiveDropdown(null)}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                            >
                              {treatments.map((treatment, idx) => (
                                <motion.a
                                  key={idx}
                                  href="#treatments"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                  whileHover={{ x: 5 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                >
                                  {treatment}
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item}
                      </motion.a>
                    )}
                  </motion.div>
                )
              )}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div
                className="hidden sm:flex items-center text-blue-600"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">+91 89298 33661</span>
              </motion.div>
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
              </motion.button>
              <motion.button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-2 space-y-2">
                {["Home", "About Us", "Treatments", "Services", "Contact"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="block py-2 text-gray-700"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Top Oncologist in Hyderabad,
                <span className="text-blue-600">
                  {" "}
                  Fast Appointments & Quality Care
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                Dr. Ravi Krishna is a leading medical oncologist in Hyderabad,
                known for delivering personalized cancer care with a focus on
                trust, empathy, and evidence-based treatment. With expertise
                from AIIMS, New Delhi, he blends clinical precision with a
                patient-first approach that simplifies complex cancer journeys.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation
                </motion.button>
                <motion.button
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl p-8 relative z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  {/* Doctor's Picture */}
                  <motion.div
                    className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-200"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                      alt="Dr. Ravi Krishna"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Dr. Ravi Krishna
                  </h3>
                  <p className="text-gray-600 mb-4">
                    DM Oncology, AIIMS New Delhi
                  </p>
                  <motion.div
                    className="grid grid-cols-3 gap-4 text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      { number: "180+", label: "Happy Patients" },
                      { number: "795+", label: "Successful Therapies" },
                      { number: "8+", label: "Years Experience" },
                    ].map((stat, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <div className="text-2xl font-bold text-blue-600">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Dr. Ravi Krishna
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A distinguished medical oncologist with extensive training from
              AIIMS, New Delhi, dedicated to providing compassionate and
              comprehensive cancer care.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                color: "blue",
                icon: Users,
                number: "180+",
                title: "Happy Patients",
                description:
                  "Successfully treated patients across various cancer types",
              },
              {
                color: "green",
                icon: Award,
                number: "795+",
                title: "Successful Therapies",
                description: "Advanced treatment protocols with proven results",
              },
              {
                color: "purple",
                icon: Star,
                number: "8+",
                title: "Years of Experience",
                description: "Extensive expertise in medical oncology",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className={`bg-${stat.color}-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow cursor-pointer`}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <stat.icon
                  className={`w-12 h-12 text-${stat.color}-600 mx-auto mb-4`}
                />
                <h3
                  className={`text-2xl font-bold text-${stat.color}-600 mb-2`}
                >
                  {stat.number}
                </h3>
                <p className="text-gray-700 font-semibold">{stat.title}</p>
                <p className="text-sm text-gray-600 mt-2">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Cancer Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From diagnosis to recovery, we provide end-to-end oncology
              services with a patient-centered approach
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-blue-600 mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Specialized Cancer Treatments
            </h3>
            <motion.div
              className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cancerTypes.map((cancer, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {cancer.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {cancer.name}
                  </h4>
                  <p className="text-sm text-gray-600">{cancer.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-blue-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Patients Think About Us
            </h2>
            <p className="text-xl text-blue-100">
              Real experiences from patients who trusted us with their care
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-white rounded-2xl p-8 shadow-2xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        </motion.div>
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
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentTestimonial ? "bg-white" : "bg-blue-400"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Appointment Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-green-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={slideInLeft}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Book an Appointment
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Avoid the wait. Schedule your consultation with Dr. Ravi
                Krishna, a leading cancer specialist in Hyderabad, at your
                convenience.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "DM Oncology, AIIMS New Delhi",
                  "Personalized, evidence-based cancer care",
                  "Treatment for all cancer types",
                  "24/7 patient support available",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Request an Appointment
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8"
              variants={slideInRight}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                24/7 Patient Support
              </h3>
              <p className="text-gray-600 mb-6">
                From queries to emergencies—we're here for you round the clock.
                Get expert help, anytime.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "Emergency Consultation" },
                  { icon: Clock, text: "24/7 Medical Support" },
                  { icon: Heart, text: "Ongoing Patient Care" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Quick Links
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Hemato Oncology",
              "Urological Cancer Treatment",
              "Gastrointestinal Cancer Treatment",
              "Breast Cancer Treatment",
              "Lung Cancer Treatment",
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href="#treatments"
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow group"
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {link}
                </h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Dr. Ravi Krishna</h3>
              <p className="text-gray-400 mb-4">
                Leading Medical Oncologist in Hyderabad
              </p>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 89298 33661</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "Services", "Contact", "Privacy Policy"].map(
                  (link, index) => (
                    <li key={link}>
                      <motion.a
                        href={`#${link.toLowerCase().replace(" ", "")}`}
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <motion.button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400">
              Copyright 2025 Dr. Ravi Krishna. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default DrRaviKrishnaWebsite1;
