import { motion } from 'motion/react';
import { Zap, Shield, Clock, TrendingUp, Users, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function WhySection() {
  const advantages = [
    {
      icon: Zap,
      title: 'Rapide & Efficace',
      description: 'Livraison ultra-rapide grâce à notre réseau optimisé de livreurs',
      iconBg: 'from-green-500 to-green-600',
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Paiements sécurisés et suivi en temps réel de vos commandes',
      iconBg: 'from-green-400 to-green-500',
    },
    {
      icon: Clock,
      title: 'Disponible 7j/7',
      description: 'Service disponible tous les jours de 09:00 à 00:00',
      iconBg: 'from-emerald-500 to-green-600',
    },
    {
      icon: Smartphone,
      title: '100% Digital',
      description: 'Technologie de pointe pour une expérience fluide',
      iconBg: 'from-green-600 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Support Local',
      description: 'Service client algérien réactif et à votre écoute',
      iconBg: 'from-green-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Plateforme en constante évolution pour mieux vous servir',
      iconBg: 'from-lime-500 to-green-500',
    },
  ];

  const stats = [
    { value: 5000, label: 'Livraisons', suffix: '+' },
    { value: 100, label: 'Livreurs Actifs', suffix: '+' },
    { value: 50, label: 'Partenaires', suffix: '+' },
    { value: 98, label: 'Satisfaction Client', suffix: '%' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = end;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(start);
                  return newCounts;
                });
              }
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

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
            NOS AVANTAGES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pourquoi <span className="text-green-500">CinQ CinQ</span> ?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Découvrez les avantages qui font de CinQ CinQ la plateforme de livraison de référence en Algérie
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
              }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-green-500/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              {/* Icon */}
              <motion.div 
                className={`relative bg-gradient-to-br ${advantage.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-green-500/20 mx-auto`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <advantage.icon size={32} className="text-black" />
                
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-green-500/30 rounded-xl blur-md -z-10 group-hover:bg-green-500/50 transition-colors"></div>
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-green-400 transition-colors">{advantage.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">{advantage.description}</p>
              
              {/* Bottom Line Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-green-500/50"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div id="stats-section" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 border border-green-500/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-white text-center mb-12 text-3xl font-bold">
                Nos <span className="text-green-500">Chiffres</span> Clés
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-5xl md:text-6xl font-bold text-green-500 mb-2 drop-shadow-lg">
                      {counts[index]}
                      {stat.suffix}
                    </div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
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