'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "850,000 Birr",
    location: "Bole, Addis Ababa",
    beds: 4,
    baths: 3,
    area: "450",
    image: "/Image/Prop1.png",
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
    image: "/Image/Prop2.png",
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
    image: "/Image/Prop3.jpg",
    badge: "Featured"
  }
];

export default function FeaturedProperties() {
  const router = useRouter();
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#112D4E] mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that combine luxury, comfort, and modern living.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
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
        </div>

        {/* View All Properties Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#112D4E] text-white px-8 py-3 rounded-full hover:bg-[#0a1f3a] transition-colors"
            onClick={() => router.push('/properties')}
          >
            View All Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 