import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Découvrez CinQ CinQ en vidéo</h2>
            <p className="text-gray-400 text-lg">
              Plongez dans l'univers de la livraison nouvelle génération en Algérie
            </p>
          </div>

          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-green-500/20">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30"></div>
                <img
                  src="https://images.unsplash.com/photo-1766592817657-fc61d166f06f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjByZXN0YXVyYW50JTIwbWVhbHxlbnwxfHx8fDE3NzEzNTIxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover opacity-50"
                />
                <motion.button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 bg-green-500 hover:bg-green-400 text-black rounded-full p-8 transition-all shadow-lg shadow-green-500/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={48} fill="currentColor" />
                </motion.button>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                <p className="text-xl">Vidéo à venir - En production</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}