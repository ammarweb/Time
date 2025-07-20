"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const router = useRouter();

  // Counter animation logic
  const [properties, setProperties] = useState(0);
  const [users, setUsers] = useState(0);
  const [success, setSuccess] = useState(0);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!statsInView) return;
    let propTarget = 320;
    let usersTarget = 120;
    let successTarget = 99;
    let propInterval: NodeJS.Timeout, usersInterval: NodeJS.Timeout, successInterval: NodeJS.Timeout;

    propInterval = setInterval(() => {
      setProperties((prev) => {
        if (prev < propTarget) return prev + 2;
        clearInterval(propInterval);
        return propTarget;
      });
    }, 20);

    usersInterval = setInterval(() => {
      setUsers((prev) => {
        if (prev < usersTarget) return prev + 1;
        clearInterval(usersInterval);
        return usersTarget;
      });
    }, 25);

    successInterval = setInterval(() => {
      setSuccess((prev) => {
        if (prev < successTarget) return prev + 1;
        clearInterval(successInterval);
        return successTarget;
      });
    },25);

    return () => {
      clearInterval(propInterval);
      clearInterval(usersInterval);
      clearInterval(successInterval);
    };
  }, [statsInView]);

  return (
    <main    id="#"     className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Find Your Dream <span className="text-[#3F72AF]">Home</span> Today
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover a seamless way to buy, sell, or rent properties — all without paying any commissions. Your perfect property is just a click away.
            </motion.p>
            <motion.div 
              className="flex flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="bg-[#3F72AF] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-[#2E5A8F] transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/properties')}

              >
                Browse Properties
              </motion.button>
              <motion.button 
                className="border-2 border-[#3F72AF] text-[#3F72AF] px-4 py-2 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-[#3F72AF] hover:text-white transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/properties')}

              >
                List Your Property
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative w-full h-[500px] bg-transparent hidden md:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src="/Image/Alsam2.png"
              alt="Modern House"
              fill
              className="object-cover object-center"
              priority
              style={{ mixBlendMode: 'normal' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        className="max-w-7xl mx-auto px-6 mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Properties */}
            <motion.div 
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-4xl font-bold text-[#3F72AF]">
                {properties}+
              </div>
              <div className="text-gray-600 font-medium">Properties</div>
            </motion.div>
            {/* Happy Users */}
            <motion.div 
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="text-4xl font-bold text-[#3F72AF]">
                {users}+
              </div>
              <div className="text-gray-600 font-medium">Happy Users</div>
            </motion.div>
            {/* Success Rate */}
            <motion.div 
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="text-4xl font-bold text-[#3F72AF]">
                {success}%
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </motion.div>
            {/* 24/7 Support (no animation) */}
            <motion.div 
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="text-4xl font-bold text-[#3F72AF]">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support</div>
            </motion.div>
          </div>
        </div>
      </motion.section>
       {/* Scroll Down Indicator */}
       <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </motion.div>
    </main>
  );
}