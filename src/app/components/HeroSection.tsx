import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/dark.png';

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-8"
          >
            <motion.img 
              src={logo} 
              alt="CinQ CinQ" 
              className="h-32 w-32"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Main Slogan */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white mb-6 text-5xl md:text-6xl font-bold"
          >
            La plateforme algérienne de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              livraison multi-services
            </span>
          </motion.h1>

          {/* Sub Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12"
          >
            Tout ce dont vous avez besoin, livré à tout moment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => onScrollToSection('a-propos')}
              className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-6 text-lg group shadow-lg shadow-green-500/50"
            >
              Découvrir CinQ CinQ
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => onScrollToSection('applications')}
              variant="outline"
              className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-6 text-lg group"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Applications Coming Soon
            </Button>
          
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}