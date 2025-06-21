'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Bed, Bath, Square, MapPin, ArrowRight, Search, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "850,000 Birr",
    location: "Bole, Addis Ababa",
    beds: 4,
    baths: 3,
    area: "450",
    image:"/Image/Prop1.png",
    badge: "New"
  },
  {
    id: 2,
    title: "Contemporary Apartment",
    price: "450,000 Birr",
    location: "Sarbet, Addis Ababa",
    beds: 3,
    baths: 2,
    area: "280",
    image:"/Image/Prop2.png",
    badge: "For Sale"
  },
  {
    id: 3,
    title: "Smart Home Residence",
    price: "650,000 Birr",
    location: "CMC, Addis Ababa",
    beds: 5,
    baths: 4,
    area: "520",
    image:"/Image/Prop3.png",
    badge: "Featured"
  },
  {
    id: 4,
    title: "Contemporary Apartment",
    price: "450,000 Birr",
    location: "Sarbet, Addis Ababa",
    beds: 3,
    baths: 2,
    area: "280",
    image:"/Image/Prop4.png",
    badge: "For Rent"
  },
  {
    id: 5,
    title: "Contemporary Apartment",
    price: "450,000 Birr",
    location: "Sarbet, Addis Ababa",
    beds: 3,
    baths: 2,
    area: "280",
    image:"/Image/Prop5.png",
    badge: "For Sale"
  },
  {
    id: 6,
    title: "Contemporary Apartment",
    price: "450,000 Birr",
    location: "Sarbet, Addis Ababa",
    beds: 3,
    baths: 2,
    area: "280",
    image:"/Image/Prop6.png",
    badge: "New"
  }
];

// Function to get badge colors based on badge type
const getBadgeColors = (badge: string) => {
  switch (badge) {
    case 'New':
      return 'bg-green-500 text-white';
    case 'For Sale':
      return 'bg-blue-500 text-white';
    case 'For Rent':
      return 'bg-purple-500 text-white';
    case 'Featured':
      return 'bg-orange-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

// Loading skeleton component
const PropertySkeleton = () => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
    <div className="h-64 bg-gray-300"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="h-12 bg-gray-300 rounded"></div>
    </div>
  </div>
);

export default function PropertiesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBadge, setSelectedBadge] = useState('All');
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const router = useRouter();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter properties based on search and badge
  useEffect(() => {
    let filtered = properties;
    
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedBadge !== 'All') {
      filtered = filtered.filter(property => property.badge === selectedBadge);
    }
    
    setFilteredProperties(filtered);
  }, [searchTerm, selectedBadge]);

  const badgeOptions = ['All', 'New', 'For Sale', 'For Rent', 'Featured'];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 bg-gradient-to-b from-white to-gray-50">
        {/* Simple Header */}
        <section className="py-8 bg-gradient-to-b from-[#112D4E]/5 to-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-2">
                  Our <span className='text-[#3F72AF]'>Properties</span>
                </h2>
                <motion.div 
                  className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#3F72AF]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
                Discover our handpicked selection of premium properties that combine luxury, comfort, and modern living.
              </p>
            </motion.div>

            {/* Search and Filter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F72AF] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Badge Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {badgeOptions.map((badge) => (
                  <motion.button
                    key={badge}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedBadge(badge)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedBadge === badge
                        ? 'bg-[#3F72AF] text-white shadow-lg'
                        : 'bg-white text-gray-600 border border-gray-300 hover:border-[#3F72AF] hover:text-[#3F72AF]'
                    }`}
                  >
                    {badge}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {[...Array(6)].map((_, index) => (
                    <PropertySkeleton key={index} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="properties"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProperties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    >
                      {/* Property Image */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-[#3F72AF] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          {property.price}
                        </div>
                        {/* Property Badge */}
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium shadow-lg ${getBadgeColors(property.badge)}`}>
                          {property.badge}
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                      </div>

                      {/* Property Details */}
                      <div className="p-6">
                        <motion.h3 
                          className="text-xl font-semibold text-[#112D4E] mb-2 group-hover:text-[#3F72AF] transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {property.title}
                        </motion.h3>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{property.location}</span>
                        </div>
                        
                        {/* Property Features */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <motion.div 
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Bed className="h-5 w-5 text-[#3F72AF] mr-2" />
                            <span>{property.beds} Beds</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Bath className="h-5 w-5 text-[#3F72AF] mr-2" />
                            <span>{property.baths} Baths</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Square className="h-5 w-5 text-[#3F72AF] mr-2" />
                            <span>{property.area}m²</span>
                          </motion.div>
                        </div>

                        {/* View Details Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-[#3F72AF] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2e5a8f] transition-colors"
                          onClick={() => router.push(`/properties/${property.id}`)}
                        >
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* No results message */}
            {!isLoading && filteredProperties.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-gray-500 text-lg mb-4">No properties found matching your criteria</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedBadge('All');
                  }}
                  className="bg-[#3F72AF] text-white px-6 py-2 rounded-lg hover:bg-[#2e5a8f] transition-colors"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
