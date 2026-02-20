import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Clock, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    toast.success('Message envoyé avec succès! Nous vous contacterons bientôt.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
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
            CONTACTEZ-NOUS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Une <span className="text-green-500">Question</span> ?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Un projet ? N'hésitez pas à nous contacter, notre équipe vous répondra dans les plus brefs délais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="group relative bg-gradient-to-br from-gray-950 via-gray-900 to-black p-8 rounded-2xl border border-green-500/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer h-full">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              <h3 className="text-xl font-bold text-white mb-8 relative z-10">Informations de Contact</h3>
              
              <div className="space-y-6 relative z-10">
                {/* Founder */}
                <motion.div 
                  className="flex items-start group/item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-green-500/20">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white group-hover/item:text-green-400 transition-colors">Fondateur</p>
                    <p className="text-gray-400">Fethallah Bensaiah</p>
                  </div>
                </motion.div>

                {/* Phone Numbers */}
                <motion.div 
                  className="flex items-start group/item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-green-400 to-green-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-green-500/20">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-white group-hover/item:text-green-400 transition-colors">Téléphone</p>
                    <a href="tel:0549000866" className="text-gray-400 hover:text-green-400 transition block mb-1">
                      0549 000 866
                    </a>
                    <a href="tel:0771351845" className="text-gray-400 hover:text-green-400 transition block">
                      0771 351 845
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-start group/item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-green-500/20">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white group-hover/item:text-green-400 transition-colors">Email</p>
                    <a 
                      href="mailto:contact.cinqcinqexpress@gmail.com" 
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      contact.cinqcinqexpress@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div 
                  className="flex items-start group/item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-green-600 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-green-500/20">
                    <Clock size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white group-hover/item:text-green-400 transition-colors">Horaires</p>
                    <p className="text-gray-400">7j/7</p>
                    <p className="text-gray-400">09:00 → 00:00</p>
                  </div>
                </motion.div>

                {/* Instagram */}
                <motion.div 
                  className="flex items-start group/item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-green-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-green-500/20">
                    <Instagram size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white group-hover/item:text-green-400 transition-colors">Suivez-nous</p>
                    <a 
                      href="https://www.instagram.com/cinqcinq_livraison" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      @cinqcinq_livraison
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Line Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-green-500/50"></div>
              
              {/* Decorative Element */}
              <div className="mt-8 pt-8 border-t border-gray-700 relative z-10">
                <p className="text-gray-400 text-sm">
                  CinQ CinQ Delivery - La plateforme algérienne de livraison multi-services
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="group relative bg-gradient-to-br from-gray-950 via-gray-900 to-black p-8 rounded-2xl border border-green-500/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">Envoyez-nous un message</h3>
              
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Téléphone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06XX XX XX XX"
                      className="w-full bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={6}
                      className="w-full bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500/20 backdrop-blur-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-semibold py-6 text-lg group shadow-lg shadow-green-500/50 border border-green-500/20 backdrop-blur-sm"
                  >
                    Envoyer le message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </form>
              </div>
              
              {/* Bottom Line Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-green-500/50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}