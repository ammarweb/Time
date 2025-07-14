'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  Award, 
  Users, 
  Home, 
  Shield, 
  Clock, 
  Star,
  TrendingUp,
  Heart
} from 'lucide-react';

const stats = [
  { id: 1, icon: Home, value: '500+', label: 'Properties Sold', color: '#3F72AF' },
  { id: 2, icon: Users, value: '1000+', label: 'Happy Clients', color: '#112D4E' },
  { id: 3, icon: Award, value: '15+', label: 'Years Experience', color: '#3F72AF' },
  { id: 4, icon: Star, value: '98%', label: 'Client Satisfaction', color: '#112D4E' },
];

const features = [
  {
    id: 1,
    icon: Shield,
    title: "Trusted Security",
    description: "Your property investments are protected with our comprehensive security measures.",
    color: "#3F72AF"
  },
  {
    id: 2,
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your real estate needs and queries.",
    color: "#112D4E"
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Market Expertise",
    description: "Stay ahead with our deep understanding of market trends and opportunities.",
    color: "#3F72AF"
  },
  {
    id: 4,
    icon: Heart,
    title: "Client First",
    description: "Your satisfaction is our priority, with personalized service at every step.",
    color: "#112D4E"
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  // Counter states for each stat
  const [counters, setCounters] = useState([
    0, // Properties Sold
    0, // Happy Clients
    0, // Years Experience
    0  // Client Satisfaction
  ]);

  useEffect(() => {
    if (!isInView) return;
    const targets = [500, 1000, 15, 98];
    const increments = [5, 10, 1, 1];
    const intervals: NodeJS.Timeout[] = [];

    targets.forEach((target, i) => {
      intervals[i] = setInterval(() => {
        setCounters(prev => {
          const next = [...prev];
          if (next[i] < target) {
            next[i] = Math.min(next[i] + increments[i], target);
          }
          return next;
        });
      }, 15 + i * 10);
    });

    // Stop intervals when done
    const stopCheck = setInterval(() => {
      setCounters(prev => {
        if (prev.every((val, i) => val >= targets[i])) {
          intervals.forEach(clearInterval);
          clearInterval(stopCheck);
        }
        return prev;
      });
    }, 50);

    return () => {
      intervals.forEach(clearInterval);
      clearInterval(stopCheck);
    };
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#3F72AF] rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#112D4E] rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-4">
            Why Choose <span className="text-[#3F72AF]">Noble Homes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience excellence in real estate with our commitment to quality, trust, and innovation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <motion.h3 
                    className="text-3xl font-bold mb-2"
                    style={{ color: stat.color }}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {counters[index]}{stat.value.replace(/\d+/g, '')}
                  </motion.h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <feature.icon 
                    className="w-12 h-12 mb-6" 
                    style={{ color: feature.color }}
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#112D4E]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start Your Journey With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 