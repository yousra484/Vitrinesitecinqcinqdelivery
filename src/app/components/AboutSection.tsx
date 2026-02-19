import { motion } from 'motion/react';
import { Target, Eye, History, Award, Quote } from 'lucide-react';
import fondateurImg from '@/assets/fondateur.JPG';
import equipe1Img from '@/assets/equipe1.JPG';
import equipe2Img from '@/assets/equipe2.JPG';
import equipe3Img from '@/assets/equipe3.jpg';

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Digitaliser les services quotidiens en Algérie en connectant clients, commerces et livreurs via une plateforme innovante et accessible.',
    },
    {
      icon: Eye,
      title: 'Notre Vision',
      description: 'Devenir la référence de la livraison multi-services en Algérie, en offrant une expérience fluide, rapide et fiable pour tous.',
    },
    {
      icon: History,
      title: 'Notre Histoire',
      description: 'Née de l\'expérience terrain et de la compréhension des besoins locaux, CinQ CinQ révolutionne la livraison en Algérie depuis 2019.',
    },
    {
      icon: Award,
      title: 'Notre Expertise',
      description: 'Plus de 5 ans d\'expérience dans la logistique et la livraison, avec une équipe passionnée qui maîtrise les défis du terrain algérien.',
    },
  ];

  const teamImages = [equipe1Img, equipe2Img, equipe3Img];

  return (
    <section id="a-propos" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
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
            À PROPOS DE NOUS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Découvrez <span className="text-green-500">CinQ CinQ</span> Delivery
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Une startup algérienne qui révolutionne le secteur de la livraison 
            avec une plateforme complète, moderne et adaptée aux besoins locaux.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={fondateurImg}
                  alt="Fethallah Bensaiah - Fondateur"
                  className="w-full h-150 object-cover object-center "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-green-500 text-black px-4 py-2 rounded-lg inline-block font-semibold text-sm mb-2">
                    FONDATEUR & CEO
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-green-500/30 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500/10 rounded-2xl -z-10"></div>
            </motion.div>

            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Fethallah Bensaiah
                </h3>
                <p className="text-green-500 font-semibold text-lg">Fondateur & CEO de CinQ CinQ Delivery</p>
              </div>

              <div className="flex items-center gap-4 bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-xl border-l-4 border-green-500">
                <div className="text-4xl font-bold text-green-500">5+</div>
                <div>
                  <p className="text-white font-semibold">Années d'expérience</p>
                  <p className="text-gray-400 text-sm">dans la logistique et la livraison</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Entrepreneur passionné et visionnaire, Fethallah a fondé CinQ CinQ Delivery avec une mission claire : 
                révolutionner la livraison en Algérie. Fort de plus de <strong className="text-green-500">5 ans d'expérience</strong> sur le terrain, 
                il comprend parfaitement les défis logistiques locaux et apporte des solutions technologiques innovantes.
              </p>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-green-500/20">
                <Quote className="text-green-500 mb-3" size={32} />
                <p className="text-gray-300 italic text-lg">
                  "Notre objectif est de digitaliser les services quotidiens en Algérie et de rendre la livraison 
                  accessible, rapide et fiable pour tous les Algériens."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Notre Équipe</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Une équipe soudée et passionnée, prête à relever tous les défis pour vous offrir le meilleur service de livraison.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-xl border border-green-500/20 hover:border-green-500/50 transition-all"
              >
                <img
                  src={img}
                  alt={`Équipe CinQ CinQ ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold">Équipe CinQ CinQ</p>
                    <p className="text-green-500 text-sm">Livraison & Logistique</p>
                  </div>
                </div>
                {/* Green accent on hover */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-green-500/50"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4 Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ce Qui Nous Définit</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nos valeurs fondamentales qui guident chaque décision et chaque action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -8, 0],
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-green-500/10 hover:border-green-500/40 transition-all hover:shadow-xl hover:shadow-green-500/20 backdrop-blur-sm cursor-pointer"
                style={{
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-green-500 to-green-600 text-black w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-green-500/30"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                  }}
                >
                  <feature.icon size={28} />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                
                {/* Floating particle */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}