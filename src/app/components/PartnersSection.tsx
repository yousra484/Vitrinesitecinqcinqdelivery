import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function PartnersSection() {
  // Mock partner logos - In production, these would be actual partner logos
  const partnerCategories = [
    {
      category: 'Restaurants',
      partners: ['Pizza Hut', 'KFC', 'Burger King', 'McDonald\'s', 'Subway'],
    },
    {
      category: 'Startups',
      partners: ['TechStart', 'InnovateDZ', 'AlgeriaTech', 'StartupDZ', 'DigitalHub'],
    },
    {
      category: 'Solutions Paiement',
      partners: ['CIB', 'Satim', 'BaridiMob', 'Dahabia', 'PayCard'],
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Nos Partenaires</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ils nous font confiance pour digitaliser leurs services de livraison
          </p>
        </motion.div>

        {partnerCategories.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-green-500 text-xl font-semibold mb-6 text-center">
              {category.category}
            </h3>
            <Slider {...settings}>
              {category.partners.map((partner, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white rounded-xl p-8 h-32 flex items-center justify-center hover:shadow-lg hover:shadow-green-500/20 transition-all">
                    <p className="text-2xl font-bold text-gray-800">{partner}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}

        {/* Call to Action for Partners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-black mb-4">
            Devenez Partenaire CinQ CinQ
          </h3>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et développez votre activité grâce à notre plateforme innovante
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            Contactez-nous
          </button>
        </motion.div>
      </div>
    </section>
  );
}
