import { motion, useScroll, useTransform } from 'motion/react';
import { Smartphone, Store, Bike, CheckCircle, Play } from 'lucide-react';
import { useRef, useState } from 'react';

export function ApplicationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [activeApp, setActiveApp] = useState(0);

  const apps = [
    {
      id: 0,
      icon: Smartphone,
      name: 'Customer App',
      title: 'Pour les Clients',
      tagline: 'Commander en toute simplicité',
      description: 'Commandez tous vos services quotidiens en quelques clics',
      features: [
        'Commander vos services favoris',
        'Suivi en temps réel',
        'Paiement sécurisé',
        'Historique des commandes',
        'Notifications instantanées',
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBzY3JlZW58ZW58MXx8fHwxNzcxNDA1MDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 1,
      icon: Store,
      name: 'Merchant App',
      title: 'Pour les Commerçants',
      tagline: 'Gérez et développez votre business',
      description: 'Gérez votre activité et développez vos ventes',
      features: [
        'Gestion des commandes',
        'Dashboard analytique',
        'Marketing intégré',
        'Gestion du catalogue',
        'Statistiques en temps réel',
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500',
      image: 'https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTM5NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      icon: Bike,
      name: 'Rider App',
      title: 'Pour les Livreurs',
      tagline: 'Travaillez en toute flexibilité',
      description: 'Travaillez en toute flexibilité et maximisez vos revenus',
      features: [
        'Gestion des livraisons',
        'Revenus flexibles',
        'Optimisation des trajets',
        'Suivi des gains',
        'Support 24/7',
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1659353740216-8f1922e08f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGRyaXZlciUyMGFwcCUyMGdwc3xlbnwxfHx8fDE3NzE0NDA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const currentApp = apps[activeApp];

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section id="applications" ref={containerRef} className="py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-green-500 text-black px-6 py-3 rounded-full font-semibold mb-6 gap-2 shadow-lg shadow-green-500/50">
            <Play size={20} fill="currentColor" />
            COMING SOON
          </div>
          <h2 className="text-white mb-6">Découvrez Nos Applications</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Trois applications mobiles performantes pour une expérience complète et optimale
          </p>
        </motion.div>

        {/* Main Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Phone Mockups - Left Side */}
          <motion.div 
            className="relative h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Gradient Blob */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${currentApp.color} opacity-20 blur-3xl rounded-full`}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Phone Mockup */}
            <motion.div
              key={activeApp}
              initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
              style={{ y: y1 }}
            >
              {/* Phone Frame */}
              <div className="relative w-[320px] h-[650px] bg-gray-950 rounded-[3rem] p-3 shadow-2xl shadow-green-500/20 border border-green-500/20">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-950 rounded-b-3xl z-20"></div>
                
                {/* Screen */}
                <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden border border-gray-800">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center justify-between px-8 pt-2">
                    <span className="text-xs font-semibold text-white">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Screenshot */}
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={currentApp.image}
                      alt={currentApp.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* App Overlay UI Elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-green-500/20"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`${currentApp.bgColor} p-2 rounded-xl shadow-lg`}>
                              <currentApp.icon size={24} className="text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white">{currentApp.name}</h4>
                              <p className="text-xs text-gray-400">{currentApp.tagline}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-1 bg-green-500 text-black text-center py-2 rounded-lg font-semibold text-sm shadow-lg">
                              Bientôt disponible
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Phone Button */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className={`absolute -right-12 top-20 ${currentApp.bgColor} text-white p-4 rounded-2xl shadow-xl`}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <CheckCircle size={32} />
              </motion.div>

              <motion.div
                className="absolute -left-12 bottom-32 bg-gray-800 p-4 rounded-2xl shadow-xl border border-green-500/30"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <currentApp.icon size={32} className="text-green-500" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* App Details - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* App Switcher */}
            <div className="flex gap-4 mb-8">
              {apps.map((app, index) => (
                <motion.button
                  key={app.id}
                  onClick={() => setActiveApp(index)}
                  className={`flex-1 p-4 rounded-2xl border-2 transition-all ${
                    activeApp === index
                      ? `border-current bg-gradient-to-br ${app.color} text-white shadow-lg`
                      : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <app.icon size={32} className="mx-auto mb-2" />
                  <p className="font-semibold text-sm">{app.title}</p>
                </motion.button>
              ))}
            </div>

            {/* App Info */}
            <motion.div
              key={activeApp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <h3 className="text-4xl font-bold text-white mb-3">{currentApp.title}</h3>
                <p className="text-xl text-gray-400">{currentApp.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white text-lg mb-4">Fonctionnalités clés :</h4>
                {currentApp.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`${currentApp.bgColor} p-1 rounded-lg mt-0.5`}>
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Download Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`mt-8 bg-gradient-to-br ${currentApp.color} p-6 rounded-2xl text-white shadow-lg`}
              >
                <p className="font-semibold mb-2">Bientôt disponible sur</p>
                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-sm text-center py-3 rounded-xl font-semibold">
                    App Store
                  </div>
                  <div className="flex-1 bg-white/20 backdrop-blur-sm text-center py-3 rounded-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* All Apps Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 overflow-hidden border border-green-500/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-white text-3xl font-bold text-center mb-12">
                Un Écosystème Complet
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {apps.map((app, index) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ y: index === 1 ? y2 : y1 }}
                  >
                    <div className={`bg-gradient-to-br ${app.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                      <app.icon size={40} className="text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">{app.title}</h4>
                    <p className="text-gray-400 text-sm">{app.tagline}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}