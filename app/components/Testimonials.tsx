'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Property Owner",
    image: "/Image/tg.png",
    rating: 5,
    text: "Noble Homes  made selling my property an absolute breeze. Their professionalism and market knowledge exceeded my expectations.",
    property: "Luxury Villa in Bole",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Buyer",
    image: "/Image/tg.png",

    rating: 5,
    text: "The team's dedication to finding the perfect home for my family was remarkable. They understood our needs perfectly.",
    property: "Modern Apartment in Sarbet",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Investor",
    image: "/Image/tg.png",
    rating: 5,
    text: "Their investment advice and property management services have been invaluable to my portfolio growth.",
    property: "Commercial Space in CMC",
    date: "January 2024"
  },
  {
    id: 4,
    name: "David Kim",
    role: "First-time Buyer",
    image: "/Image/tg.png",
    rating: 4,
    text: "As a first-time buyer, I was nervous, but the team guided me through every step with patience and expertise.",
    property: "Starter Home in Gerji",
    date: "December 2023"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#3F72AF] text-[#3F72AF]" />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#3F72AF] rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#112D4E] rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
      </div>

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
            Client <span className="text-[#3F72AF]">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from our satisfied clients about their experience with Time Real Estate
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <Quote className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#3F72AF] text-white p-1.5 rounded-full" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-[#112D4E]">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <p className="mt-4 text-gray-700">{testimonial.text}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-[#3F72AF] font-medium">{testimonial.property}</p>
                      <p className="text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <Quote className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#3F72AF] text-white p-1 rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-[#112D4E]">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                        <StarRating rating={testimonial.rating} />
                      </div>
                      <p className="mt-3 text-gray-700 text-sm">{testimonial.text}</p>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-sm text-[#3F72AF] font-medium">{testimonial.property}</p>
                        <p className="text-xs text-gray-500">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
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
            Share Your Story
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonial-slider .swiper-pagination-bullet {
          background: #3F72AF;
        }
        .testimonial-slider .swiper-pagination-bullet-active {
          background: #112D4E;
        }
      `}</style>
    </section>
  );
} 