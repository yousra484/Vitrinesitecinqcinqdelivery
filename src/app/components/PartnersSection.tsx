import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ambianceLogo from '@/assets/ambiance.png';
import medianoLogo from '@/assets/mediano.png';
import lecinqLogo from '@/assets/lecinq.png';
import paradiseLogo from '@/assets/paradise.png';
import equinoxeLogo from "@/assets/l'equinoxe.png";
import legourmetLogo from '@/assets/legourmet.png';
import latinahouseLogo from '@/assets/latinahouse.png';
import leloftLogo from '@/assets/leloft.png';
import larryLogo from '@/assets/larry.png';
import eternatechLogo from '@/assets/eternatech.png';

export function PartnersSection() {
  const restaurants = [
    { name: 'Ambiance', logo: ambianceLogo },
    { name: 'Mediano', logo: medianoLogo },
    { name: 'Le Cinq', logo: lecinqLogo },
    { name: 'Paradise', logo: paradiseLogo },
    { name: "L'Équinoxe", logo: equinoxeLogo },
    { name: 'Le Gourmet', logo: legourmetLogo },
    { name: 'Latina House', logo: latinahouseLogo },
    { name: 'Le Loft', logo: leloftLogo },
    { name: 'Larry', logo: larryLogo },
  ];

  const partnerCategories = [
    {
      category: 'Restaurants',
      partners: restaurants,
    },
    {
      category: 'Collaborations',
      partners: [
        { name: 'EternaTech', logo: eternatechLogo },
        { name: 'InnovateDZ', logo: null },
        { name: 'AlgeriaTech', logo: null },
        { name: 'StartupDZ', logo: null },
        { name: 'DigitalHub', logo: null },
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-green-500/20">
            ILS NOUS FONT CONFIANCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos <span className="text-green-500">Partenaires</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ils nous font confiance pour digitaliser leurs services de livraison
          </p>
        </motion.div>

        {partnerCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-green-500 text-xl font-semibold mb-8 text-center">
              {category.category}
            </h3>
            <Slider {...settings}>
              {category.partners.map((partner, index) => (
                <div key={index} className="px-3">
                  <motion.div 
                    className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-4 h-44 flex items-center justify-center border border-green-500/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                    
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-32 w-auto object-contain relative z-10"
                      />
                    ) : (
                      <p className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors relative z-10">{partner.name}</p>
                    )}
                    
                    {/* Bottom Line Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-green-500/50"></div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        ))}

        {/* Call to Action for Partners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center border border-green-500/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Devenez Partenaire <span className="text-green-500">CinQ CinQ?</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Rejoignez notre réseau de partenaires et développez votre activité grâce à notre plateforme innovante
              </p>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-black px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-nous
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
