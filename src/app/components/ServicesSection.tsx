import { motion } from 'motion/react';
import { 
  UtensilsCrossed, 
  ShoppingCart, 
  CreditCard, 
  FileText, 
  Package, 
  PartyPopper, 
  Cake,
  Sparkles 
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: UtensilsCrossed,
      title: 'Livraison Repas',
      description: 'Vos plats préférés livrés chauds et rapidement à votre porte',
      iconBg: 'from-green-500 to-green-600',
      cardBg: 'from-gray-900 to-gray-950',
    },
    {
      icon: ShoppingCart,
      title: 'Courses & Épicerie',
      description: 'Faites vos courses sans bouger de chez vous',
      iconBg: 'from-green-400 to-green-500',
      cardBg: 'from-gray-950 to-black',
    },
    {
      icon: CreditCard,
      title: 'Paiement Factures',
      description: 'Réglez vos factures en toute simplicité',
      iconBg: 'from-emerald-500 to-green-600',
      cardBg: 'from-gray-900 to-gray-950',
    },
    {
      icon: FileText,
      title: 'Livraison Documents',
      description: 'Envoyez vos documents importants en toute sécurité',
      iconBg: 'from-green-600 to-emerald-500',
      cardBg: 'from-gray-950 to-black',
    },
    {
      icon: Package,
      title: 'Objets Personnalisés',
      description: 'Livraison de colis et objets sur mesure',
      iconBg: 'from-green-500 to-teal-500',
      cardBg: 'from-gray-900 to-gray-950',
    },
    {
      icon: PartyPopper,
      title: 'Livraison Événements',
      description: 'Services spéciaux pour vos événements',
      iconBg: 'from-lime-500 to-green-500',
      cardBg: 'from-gray-950 to-black',
    },
    {
      icon: Cake,
      title: 'Pâtisserie & Boulangerie',
      description: 'Gâteaux et pains frais livrés à domicile',
      iconBg: 'from-emerald-400 to-green-500',
      cardBg: 'from-gray-900 to-gray-950',
    },
    {
      icon: Sparkles,
      title: 'Services Premium',
      description: 'Livraison express et services VIP',
      iconBg: 'from-green-400 to-emerald-600',
      cardBg: 'from-gray-950 to-black',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
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
            NOS SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ce Que Nous <span className="text-green-500">Livrons</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Une gamme complète de services de livraison adaptés à tous vos besoins quotidiens
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
              className={`group relative bg-gradient-to-br ${service.cardBg} p-6 rounded-2xl border border-green-500/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              {/* Icon */}
              <motion.div 
                className={`relative bg-gradient-to-br ${service.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-green-500/20`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon size={28} className="text-black" />
                
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-green-500/30 rounded-xl blur-md -z-10 group-hover:bg-green-500/50 transition-colors"></div>
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              
              {/* Bottom Line Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-green-500/50"></div>
            </motion.div>
          ))}
        </div>

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
