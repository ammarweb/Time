'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Award, Users, Home, Star, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage() {
  const router = useRouter();
  const [counts, setCounts] = useState({
    properties: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });
  const statsRef = useRef<HTMLDivElement>(null);

  const awards = [
    {
      id: 1,
      title: "Best Real Estate Agency 2023",
      organization: "Addis Ababa Chamber of Commerce",
      year: "2023",
      icon: Award
    },
    {
      id: 2,
      title: "Excellence in Customer Service",
      organization: "Ethiopian Business Awards",
      year: "2022",
      icon: Star
    },
    {
      id: 3,
      title: "Top Property Developer",
      organization: "Real Estate Excellence Awards",
      year: "2021",
      icon: Home
    }
  ];

  const stats = [
    { number: 500, label: "Properties Sold", icon: Home, suffix: "+" },
    { number: 1000, label: "Happy Clients", icon: Users, suffix: "+" },
    { number: 15, label: "Years Experience", icon: Award, suffix: "+" },
    { number: 98, label: "Client Satisfaction", icon: Star, suffix: "%" }
  ];

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetCounts = {
              properties: 500,
              clients: 1000,
              years: 15,
              satisfaction: 98
            };

            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;

              setCounts({
                properties: Math.floor(targetCounts.properties * progress),
                clients: Math.floor(targetCounts.clients * progress),
                years: Math.floor(targetCounts.years * progress),
                satisfaction: Math.floor(targetCounts.satisfaction * progress)
              });

              if (currentStep >= steps) {
                clearInterval(timer);
                setCounts(targetCounts);
              }
            }, stepDuration);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
              About <span className="text-[#3F72AF]">Noble Home</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a leading real estate agency in Addis Ababa, dedicated to helping you find your perfect home and making your property dreams come true.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/get-in-touch')}
              className="bg-[#3F72AF] text-white px-8 py-3 rounded-lg hover:bg-[#2e5a8f] transition-colors"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#112D4E] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2008, Time Estate began with a simple mission: to make finding the perfect home in Addis Ababa easier and more transparent for everyone.
                </p>
                <p>
                  What started as a small family business has grown into one of the most trusted real estate agencies in the city, serving thousands of satisfied clients over the past 15 years.
                </p>
                <p>
                  Our journey has been marked by continuous growth, innovation, and an unwavering commitment to our clients' satisfaction. We've adapted to changing market conditions while maintaining our core values of integrity, transparency, and personalized service.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="/Image/Prop1.png"
                  alt="Time Estate Office"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#112D4E] mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We strive to be the most trusted and innovative real estate partner in Addis Ababa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#3F72AF] mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional real estate services that exceed our clients' expectations, 
                making the process of buying, selling, and renting properties seamless, transparent, 
                and rewarding for everyone involved.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#3F72AF] mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the leading real estate agency in Ethiopia, known for innovation, 
                integrity, and exceptional customer service, while contributing to the 
                development of sustainable and beautiful communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Reused from main page */}
      <WhyChooseUs />

      {/* Awards & Recognition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#112D4E] mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and satisfied clients
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <award.icon className="h-12 w-12 text-[#3F72AF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#112D4E] mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-2">{award.organization}</p>
                <span className="text-[#3F72AF] font-medium">{award.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-16 bg-[#112D4E]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <Home className="h-12 w-12 mx-auto mb-4 text-[#3F72AF]" />
              <div className="text-3xl font-bold mb-2">{counts.properties}{stats[0].suffix}</div>
              <div className="text-gray-300">{stats[0].label}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <Users className="h-12 w-12 mx-auto mb-4 text-[#3F72AF]" />
              <div className="text-3xl font-bold mb-2">{counts.clients}{stats[1].suffix}</div>
              <div className="text-gray-300">{stats[1].label}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <Award className="h-12 w-12 mx-auto mb-4 text-[#3F72AF]" />
              <div className="text-3xl font-bold mb-2">{counts.years}{stats[2].suffix}</div>
              <div className="text-gray-300">{stats[2].label}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <Star className="h-12 w-12 mx-auto mb-4 text-[#3F72AF]" />
              <div className="text-3xl font-bold mb-2">{counts.satisfaction}{stats[3].suffix}</div>
              <div className="text-gray-300">{stats[3].label}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#112D4E] mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to find your perfect property? Contact us today and let's make your real estate dreams come true.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <Phone className="h-8 w-8 text-[#3F72AF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#112D4E] mb-2">Call Us</h3>
              <p className="text-gray-600">+ (2519) 567-8910</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <MapPin className="h-8 w-8 text-[#3F72AF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#112D4E] mb-2">Visit Us</h3>
              <p className="text-gray-600">Bethe Apple Plaza, Addis Ababa</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <Clock className="h-8 w-8 text-[#3F72AF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#112D4E] mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon-Sun 8:00AM - 10:00PM</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-[#3F72AF]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you navigate the real estate market and find the perfect property that matches your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/properties')}
                className="bg-white text-[#3F72AF] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                View Properties
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/get-in-touch')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#3F72AF] transition-colors"
              >
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