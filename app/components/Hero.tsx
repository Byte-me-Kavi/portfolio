"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown, Download, Github, ExternalLink } from "lucide-react";
import { HydrationSafe, NoSSR } from "./HydrationSafe";

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants for smooth, professional animations
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const slideInFromLeft = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient"
      suppressHydrationWarning
    >
      {/* Animated background elements */}
      <HydrationSafe>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-20 left-10 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-40 right-20 w-48 h-48 bg-blue-200/40 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/30 rounded-full blur-xl"
          />
        </div>
      </HydrationSafe>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <HydrationSafe
            fallback={
              <div className="space-y-8">
                <div>
                  <p className="text-primary mb-4 font-medium">Hi, I&apos;m</p>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient">
                    Hasindu Bandara
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
                    Computer Science Student & Full-Stack Developer
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    Passionate Computer Science student at University of
                    Kelaniya, specializing in modern web technologies. Building
                    innovative solutions with React, Next.js, and creative
                    frontend animations. Call me "Hasi"!
                  </p>
                </div>
              </div>
            }
          >
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <motion.p
                  variants={slideInFromLeft}
                  className="text-primary mb-4 font-medium"
                >
                  Hi, I&apos;m
                </motion.p>
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl lg:text-7xl font-bold mb-6 text-gradient"
                >
                  Hasindu Bandara
                </motion.h1>
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium"
                >
                  Full-Stack Software Engineer
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-muted-foreground leading-relaxed max-w-lg"
                >
                  I craft exceptional digital experiences with modern
                  technologies. Passionate about clean code, innovative
                  solutions, and building products that make a difference.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="group" asChild>
                  <a
                    href="/Hasindu_Bandara_CV.pdf"
                    download="Hasindu_Bandara_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a
                    href="https://github.com/Hasindu123198"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    View GitHub
                  </a>
                </Button>
                <Button variant="ghost" size="lg" className="group" asChild>
                  <a
                    href="https://linkedin.com/in/hasindu-bandara-7a227a308"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </HydrationSafe>

          {/* Visual Element */}
          <HydrationSafe
            fallback={
              <div className="relative w-full max-w-md mx-auto">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                  <img
                    src="/hasindu-photo.jpg"
                    alt="Hasindu Bandara - Full Stack Developer"
                    className="w-full h-48 object-cover object-top rounded-lg mb-4"
                  />
                  <div className="space-y-3">
                    <div
                      className="h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: "75%" }}
                    />
                    <div
                      className="h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                      style={{ width: "50%" }}
                    />
                    <div
                      className="h-3 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>
              </div>
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full max-w-md mx-auto relative"
              >
                <motion.div
                  className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src="/hasindu-photo.jpg"
                    alt="Hasindu Bandara - Full Stack Developer"
                    className="w-full h-85 object-cover object-top rounded-lg mb-4"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.02 }}
                  />
                  <div className="space-y-3">
                    <motion.div
                      className="h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{
                        delay: 1.5,
                        duration: 1.5,
                        ease: "easeOut",
                      }}
                    />
                    <motion.div
                      className="h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.div
                      className="h-3 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{
                        delay: 2.5,
                        duration: 1.5,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </HydrationSafe>
        </div>

        {/* Scroll indicator */}
        <HydrationSafe>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </HydrationSafe>
      </div>
    </section>
  );
}
