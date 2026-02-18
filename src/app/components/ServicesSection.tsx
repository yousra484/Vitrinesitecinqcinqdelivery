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
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: ShoppingCart,
      title: 'Courses & Épicerie',
      description: 'Faites vos courses sans bouger de chez vous',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: CreditCard,
      title: 'Paiement Factures',
      description: 'Réglez vos factures en toute simplicité',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Livraison Documents',
      description: 'Envoyez vos documents importants en toute sécurité',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Package,
      title: 'Objets Personnalisés',
      description: 'Livraison de colis et objets sur mesure',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: PartyPopper,
      title: 'Livraison Événements',
      description: 'Services spéciaux pour vos événements',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: Cake,
      title: 'Pâtisserie & Boulangerie',
      description: 'Gâteaux et pains frais livrés à domicile',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Sparkles,
      title: 'Services Premium',
      description: 'Livraison express et services VIP',
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Nos Services</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Une gamme complète de services de livraison adaptés à tous vos besoins quotidiens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20"
            >
              <div className={`bg-gradient-to-br ${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
