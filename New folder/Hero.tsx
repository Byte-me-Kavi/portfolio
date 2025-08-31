import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowDown, Download, Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-primary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-40 right-20 w-32 h-32 bg-accent/40 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-primary mb-4"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              >
                Alex Johnson
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl lg:text-3xl text-muted-foreground mb-6"
              >
                Full-Stack Software Engineer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                I craft exceptional digital experiences with modern technologies. 
                Passionate about clean code, innovative solutions, and building 
                products that make a difference.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                View GitHub
              </Button>
              <Button variant="ghost" size="lg" className="group">
                <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Live Projects
              </Button>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-3 pt-8"
            >
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-card rounded-2xl p-8 shadow-2xl border">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1598978028953-799807c097b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NTY2NTY0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional workspace"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-6 space-y-2">
                  <div className="h-2 bg-primary/20 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ delay: 2, duration: 2 }}
                      className="h-full bg-primary rounded-full"
                    ></motion.div>
                  </div>
                  <div className="h-2 bg-primary/20 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ delay: 2.5, duration: 2 }}
                      className="h-full bg-primary rounded-full"
                    ></motion.div>
                  </div>
                  <div className="h-2 bg-primary/20 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{ delay: 3, duration: 2 }}
                      className="h-full bg-primary rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm">Scroll down</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}