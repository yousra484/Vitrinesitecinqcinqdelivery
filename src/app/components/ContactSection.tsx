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
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Contactez-nous</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter, notre équipe vous répondra dans les plus brefs délais
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
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white h-full border border-green-500/20">
              <h3 className="text-2xl font-bold mb-8">Informations de Contact</h3>
              
              <div className="space-y-6">
                {/* Founder */}
                <div className="flex items-start">
                  <MapPin className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Fondateur</p>
                    <p className="text-gray-400">Fethallah Bensaiah</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start">
                  <Phone className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-2">Téléphone</p>
                    <a href="tel:0549000866" className="text-gray-400 hover:text-green-400 transition block mb-1">
                      0549 000 866
                    </a>
                    <a href="tel:0771351845" className="text-gray-400 hover:text-green-400 transition block">
                      0771 351 845
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:contact.cinqcinqexpress@gmail.com" 
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      contact.cinqcinqexpress@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <Clock className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Horaires</p>
                    <p className="text-gray-400">7j/7</p>
                    <p className="text-gray-400">09:00 → 00:00</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <Instagram className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Suivez-nous</p>
                    <a 
                      href="https://www.instagram.com/cinqcinq_livraison" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      @cinqcinq_livraison
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-8 pt-8 border-t border-gray-700">
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
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
              
              <div className="space-y-4">
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
                    className="w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
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
                    className="w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
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
                    className="w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
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
                    className="w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-6 text-lg group shadow-lg shadow-green-500/50"
                >
                  Envoyer le message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}