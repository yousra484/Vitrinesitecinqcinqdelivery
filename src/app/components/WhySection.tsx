import { motion } from 'motion/react';
import { Zap, Shield, Clock, TrendingUp, Users, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function WhySection() {
  const advantages = [
    {
      icon: Zap,
      title: 'Rapide & Efficace',
      description: 'Livraison ultra-rapide grâce à notre réseau optimisé de livreurs',
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Paiements sécurisés et suivi en temps réel de vos commandes',
    },
    {
      icon: Clock,
      title: 'Disponible 7j/7',
      description: 'Service disponible tous les jours de 09:00 à 00:00',
    },
    {
      icon: Smartphone,
      title: '100% Digital',
      description: 'Technologie de pointe pour une expérience fluide',
    },
    {
      icon: Users,
      title: 'Support Local',
      description: 'Service client algérien réactif et à votre écoute',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Plateforme en constante évolution pour mieux vous servir',
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
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Pourquoi CinQ CinQ ?</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Découvrez les avantages qui font de CinQ CinQ la plateforme de livraison de référence en Algérie
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all"
            >
              <div className="bg-green-500 text-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
                <advantage.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
              <p className="text-gray-400">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div id="stats-section" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-12 border border-green-500/20">
          <h3 className="text-white text-center mb-12 text-3xl font-bold">Nos Chiffres Clés</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-green-500 mb-2">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}