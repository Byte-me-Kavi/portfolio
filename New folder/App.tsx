import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Custom cursor effect (optional enhancement)
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom Cursor (optional) */}
      <div className="custom-cursor fixed w-4 h-4 bg-primary/20 rounded-full pointer-events-none z-50 transition-all duration-300 hidden lg:block" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card border-t border-border py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Alex Johnson</h3>
              <p className="text-muted-foreground">
                Full-Stack Software Engineer passionate about creating exceptional 
                digital experiences with modern technologies.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                  <motion.button
                    key={link}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>alex.johnson@email.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Alex Johnson. All rights reserved.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://twitter.com/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>
      
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow z-40"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
}