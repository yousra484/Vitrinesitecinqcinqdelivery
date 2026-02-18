import { motion } from 'motion/react';
import { Target, Eye, History, Award } from 'lucide-react';

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
      description: 'Née de l\'expérience terrain et de la compréhension des besoins locaux, CinQ CinQ révolutionne la livraison en Algérie.',
    },
    {
      icon: Award,
      title: 'Notre Expertise',
      description: 'Une équipe passionnée qui comprend les défis de la logistique algérienne et apporte des solutions technologiques adaptées.',
    },
  ];

  return (
    <section id="a-propos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">À Propos de CinQ CinQ</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            CinQ CinQ Delivery est une startup algérienne qui révolutionne le secteur de la livraison 
            en proposant une plateforme complète, moderne et adaptée aux besoins locaux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="bg-green-500 text-black w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-green-500/50">
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-green-500/20"
        >
          <img
            src="https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFydHVwJTIwb2ZmaWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzEzOTM5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Startup"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Une Startup Tech Algérienne</h3>
              <p className="text-lg text-gray-300">Innovation, agilité et proximité au service de la livraison</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}