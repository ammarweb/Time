'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, Users, Building, Shield, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const router = useRouter();

  const services = [
    {
      icon: Home,
      title: "Property Buying",
      description: "Find your dream home with our expert guidance. We help you navigate the market, negotiate the best deals, and handle all the paperwork.",
      features: ["Market Analysis", "Property Search", "Negotiation Support", "Legal Assistance"]
    },
    {
      icon: Building,
      title: "Property Selling",
      description: "Sell your property quickly and for the best price. Our marketing strategies and professional network ensure maximum exposure.",
      features: ["Property Valuation", "Marketing Strategy", "Professional Photography", "Buyer Screening"]
    },
    {
      icon: Users,
      title: "Property Renting",
      description: "Find the perfect rental property or list your property for rent. We handle tenant screening and lease management.",
      features: ["Tenant Screening", "Lease Management", "Property Marketing", "Rent Collection"]
    },
    {
      icon: Shield,
      title: "Property Management",
      description: "Professional property management services for landlords. We handle maintenance, tenant relations, and financial reporting.",
      features: ["Maintenance Coordination", "Tenant Relations", "Financial Reporting", "Legal Compliance"]
    },
    {
      icon: Star,
      title: "Real Estate Consulting",
      description: "Expert advice on real estate investments, market trends, and property development opportunities.",
      features: ["Investment Advisory", "Market Research", "Development Planning", "Risk Assessment"]
    },
    {
      icon: Building,
      title: "Commercial Real Estate",
      description: "Specialized services for commercial properties including offices, retail spaces, and industrial properties.",
      features: ["Commercial Leasing", "Investment Sales", "Market Analysis", "Tenant Representation"]
    }
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#112D4E]/10 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#112D4E] mb-6">
              Our <span className="text-[#3F72AF]">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate services tailored to meet all your property needs in Addis Ababa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#3F72AF]/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-[#3F72AF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#112D4E] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#3F72AF] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#112D4E] mb-4">Why Choose Our Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine local expertise with professional standards to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#3F72AF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#112D4E] mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals with deep market knowledge</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#3F72AF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#112D4E] mb-2">Trusted & Reliable</h3>
              <p className="text-gray-600">15+ years of trusted service in Addis Ababa</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#3F72AF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#112D4E] mb-2">Personalized Service</h3>
              <p className="text-gray-600">Tailored solutions for your specific needs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#112D4E] mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth and efficient experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Initial meeting to understand your needs" },
              { step: "02", title: "Planning", desc: "Develop a customized strategy for you" },
              { step: "03", title: "Execution", desc: "Implement the plan with expert guidance" },
              { step: "04", title: "Completion", desc: "Successfully achieve your goals" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#3F72AF] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#112D4E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#112D4E]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your real estate needs and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/properties')}
                className="bg-[#3F72AF] text-white px-8 py-3 rounded-lg hover:bg-[#2e5a8f] transition-colors flex items-center justify-center gap-2"
              >
                <Home className="h-4 w-4" />
                Visit Properties
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/get-in-touch')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#112D4E] transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
} 