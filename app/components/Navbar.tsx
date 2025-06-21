'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import {  FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '/#' || href === '/') {
      // Navigate to home page
      router.push('/');
    } else {
      // Navigate to other pages
      router.push(href);
    }
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50">
        {/* Top Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#112D4E] text-white text-xs sm:text-sm hidden md:block"
        >
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex items-center">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span>Call Us: + (2519) 567-8910</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span>Find Us: Bethe Apple Plaza, Addis Ababa</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span>Open: Mon-Sun 8:00AM - 10:00PM</span>
            </div>
          </div>
        </motion.div>

        {/* Main Navbar */}
        <nav className={`bg-white shadow-md transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-2xl font-bold text-[#3F72AF]"
            >
              <Link href="/" onClick={(e) => handleNavigation(e, '/')}>
                Time
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.ul 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="hidden md:flex space-x-8 font-medium"
            >
              {['Home', 'About', 'Properties', 'Services'].map((item) => (
                <motion.li 
                  key={item}
                  variants={{
                    hidden: { y: -10, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    onClick={(e) => handleNavigation(e, item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                    className="hover:text-[#3F72AF] transition relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3F72AF] transition-all group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block"
            >
              <Link 
                href="/get-in-touch" 
                className="bg-[#3F72AF] text-white px-5 py-2 rounded-full hover:bg-[#2e5a8f] transition flex items-center gap-2"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl p-2 relative"
                whileTap={{ scale: 0.9 }}
              >
                {menuOpen ? '✕' : '☰'}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white overflow-hidden"
              >
                <motion.ul
                  className="space-y-3 px-4 pb-4 pt-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {['Home', 'About', 'Properties', 'Services', 'Contact Us'].map((item, index) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: { x: -20, opacity: 0 },
                        visible: { x: 0, opacity: 1 }
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link 
                        href={item === 'Home' ? '/' : (index === 4 ? '/get-in-touch' : `/${item.toLowerCase().replace(' ', '-')}`)} 
                        onClick={(e) => {
                          handleNavigation(e, item === 'Home' ? '/' : (index === 4 ? '/get-in-touch' : `/${item.toLowerCase().replace(' ', '-')}`));
                          setMenuOpen(false);
                        }}
                        className={`block py-2 px-3 rounded-md ${index === 4 ? 'bg-[#3F72AF] text-white text-center' : 'hover:bg-gray-100'}`}
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Top Bar Info Inside Mobile Menu */}
                <div className="bg-[#112D4E] text-white px-4 py-3 mt-2">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>Call Us: + (2519) 567-8910</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Find Us: Bethe Apple Plaza, Addis Ababa</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Open: Mon-Sun 8:00AM - 10:00PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      {/* Floating WhatsApp Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://wa.me/25195678910"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1ebe57] transition-all duration-300 flex items-center justify-center"
          style={{ width: '56px', height: '56px' }}
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp size={28} color="#fff" />
        </a>
      </motion.div>
    </>
  );
}