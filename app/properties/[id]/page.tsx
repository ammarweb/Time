'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Bed, Bath, Square, MapPin, ArrowLeft, Phone, Mail, Calendar, Users, Car, Wifi, Tv, Coffee } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Mock properties data (in real app, this would come from API)
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
    badge: "New",
    description: "This stunning modern villa offers the perfect blend of luxury and comfort. Located in the prestigious Bole area, this property features high-end finishes, smart home technology, and breathtaking views of the city skyline.",
    features: ["Smart Home System", "Garden", "Parking", "Security System", "Air Conditioning", "Furnished"],
    amenities: ["WiFi", "TV", "Kitchen", "Laundry", "Gym", "Pool"],
    agent: {
      name: "Sarah Johnson",
      phone: "+251 911 123 456",
      image: "/Image/Prop1.png"
    },
    images: [
      
      "/Image/Prop1.png",
      "/Image/c2.jpg",
      "/Image/c3.jpg"
    ]
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
    badge: "For Sale",
    description: "A beautifully designed contemporary apartment in the heart of Sarbet. This property offers modern amenities, spacious rooms, and a convenient location close to shopping centers and public transportation.",
    features: ["Balcony", "Storage", "Parking", "Security", "Air Conditioning", "Unfurnished"],
    amenities: ["WiFi", "TV", "Kitchen", "Laundry", "Garden"],
    agent: {
      name: "Michael Chen",
      phone: "+251 922 234 567",
      image: "/Image/Prop2.png"
    },
    images: [
      "/Image/Prop2.png",
      "/Image/c5.jpg",
      "/Image/c6.jpg"
    ]
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
    badge: "Featured",
    description: "Experience the future of living with this state-of-the-art smart home. Located in the exclusive CMC area, this residence features cutting-edge technology, premium materials, and exceptional attention to detail.",
    features: ["Smart Home System", "Garden", "Parking", "Security System", "Air Conditioning", "Furnished", "Home Theater"],
    amenities: ["WiFi", "TV", "Kitchen", "Laundry", "Gym", "Pool", "Spa"],
    agent: {
      name: "Emily Davis",
      phone: "+251 933 345 678",
      image: "/Image/Prop3.jpg"
    },
    images: [
      "/Image/Prop3.png",
      "/Image/c2.jpg",
      "/Image/c3.jpg"
    ]
  },
  {
    id: 4,
    title: "Smart Home Residence",
    price: "650,000 Birr",
    location: "CMC, Addis Ababa",
    beds: 5,
    baths: 4,
    area: "520",
    image: "/Image/Prop4.png",
    badge: "Featured",
    description: "Experience the future of living with this state-of-the-art smart home. Located in the exclusive CMC area, this residence features cutting-edge technology, premium materials, and exceptional attention to detail.",
    features: ["Smart Home System", "Garden", "Parking", "Security System", "Air Conditioning", "Furnished", "Home Theater"],
    amenities: ["WiFi", "TV", "Kitchen", "Laundry", "Gym", "Pool", "Spa"],
    agent: {
      name: "Emily Davis",
      phone: "+251 933 345 678",
      image: "/Image/Prop4.png"
    },
    images: [
      "/Image/Prop4.png",
      "/Image/c5.jpg",
      "/Image/c6.jpg"
    ]
  },
  {
    id: 5,
    title: "Smart Home Residence",
    price: "650,000 Birr",
    location: "CMC, Addis Ababa",
    beds: 5,
    baths: 4,
    area: "520",
    image: "/Image/Prop5.png",
    badge: "Featured",
    description: "Experience the future of living with this state-of-the-art smart home. Located in the exclusive CMC area, this residence features cutting-edge technology, premium materials, and exceptional attention to detail.",
    features: ["Smart Home System", "Garden", "Parking", "Security System", "Air Conditioning", "Furnished", "Home Theater"],
    amenities: ["WiFi", "TV", "Kitchen", "Laundry", "Gym", "Pool", "Spa"],
    agent: {
      name: "Emily Davis",
      phone: "+251 933 345 678",
      image: "/Image/Prop5.png"
    },
    images: [
      "/Image/Prop5.png",
      "/Image/c2.jpg",
      "/Image/c3.jpg"
    ]
  },
  {
    id: 6,
    title: "Smart Home Residence",
    price: "650,000 Birr",
    location: "CMC, Addis Ababa",
    beds: 5,
    baths: 4,
    area: "520",
    image: "/Image/Prop6.png",
    badge: "Featured",
    description: "Experience the future of living with this state-of-the-art smart home. Located in the exclusive CMC area, this residence features cutting-edge technology, premium materials, and exceptional attention to detail.",
    features: ["Smart Home System", "Garden", "Parking", "Security System", "Air Conditioning", "Furnished", "Home Theater"],
    amenities: ["WiFi", "TV", "Kitchen", "Laundry", "Gym", "Pool", "Spa"],
    agent: {
      name: "Emily Davis",
      phone: "+251 933 345 678",
      image: "/Image/Prop6.png"
    },
    images: [
      "/Image/Prop6.png",
      "/Image/c5.jpg",
      "/Image/c6.jpg"
    ]
  }
];

export default function PropertyDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      const foundProperty = properties.find(p => p.id === parseInt(params.id as string));
      setProperty(foundProperty);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-96 bg-gray-300 rounded"></div>
                <div className="space-y-4">
                  <div className="h-6 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-8">The property you're looking for doesn't exist.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/properties')}
              className="bg-[#3F72AF] text-white px-6 py-3 rounded-lg hover:bg-[#2e5a8f] transition-colors flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </motion.button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/properties')}
            className="mb-8 bg-white text-[#3F72AF] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Properties
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                <Image
                  src={property.images[selectedImage]}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#3F72AF] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.price}
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.badge}
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-2">
                {property.images.map((image: string, index: number) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 w-20 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-[#3F72AF]' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl font-bold text-[#112D4E] mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.location}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
                <div className="text-center">
                  <Bed className="h-8 w-8 text-[#3F72AF] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#112D4E]">{property.beds}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="h-8 w-8 text-[#3F72AF] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#112D4E]">{property.baths}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square className="h-8 w-8 text-[#3F72AF] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#112D4E]">{property.area}</div>
                  <div className="text-sm text-gray-600">m²</div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-[#112D4E] mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#3F72AF] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-semibold text-[#112D4E] mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#3F72AF] rounded-full mr-3"></div>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Agent */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#112D4E] mb-4">Contact Agent</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#3F72AF] rounded-full mr-4 flex items-center justify-center text-white font-semibold">
                    {property.agent.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-[#112D4E]">{property.agent.name}</div>
                    <div className="text-sm text-gray-600">Real Estate Agent</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-4 w-4 mr-2 text-[#3F72AF]" />
                    <span>{property.agent.phone}</span>
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${property.agent.phone.replace(/\s+/g, '')}`}
                  className="w-full mt-4 bg-[#3F72AF] text-white py-3 rounded-lg hover:bg-[#2e5a8f] transition-colors flex items-center justify-center"
                >
                  Contact Agent
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 