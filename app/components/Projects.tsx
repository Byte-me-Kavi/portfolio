'use client';

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    metrics: {
      stars: 247,
      forks: 89,
      views: "12.5k"
    },
    status: "Active",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Built with Next.js, Socket.io for real-time features, and MongoDB for data persistence.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    tags: ["Next.js", "TypeScript", "Socket.io", "MongoDB", "Tailwind"],
    github: "https://github.com/username/task-manager",
    live: "https://taskmanager-demo.vercel.app",
    metrics: {
      stars: 189,
      forks: 56,
      views: "8.2k"
    },
    status: "Active",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts. Integrated with multiple weather APIs.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
    tags: ["Vue.js", "Chart.js", "Weather API", "PWA", "Vercel"],
    github: "https://github.com/username/weather-dashboard",
    live: "https://weather-dash.vercel.app",
    metrics: {
      stars: 156,
      forks: 34,
      views: "6.1k"
    },
    status: "Completed",
    featured: false
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and reporting features. Connects to multiple social platforms APIs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    tags: ["React", "D3.js", "Express", "Redis", "Docker"],
    github: "https://github.com/username/social-analytics",
    live: "https://analytics-demo.vercel.app",
    metrics: {
      stars: 203,
      forks: 67,
      views: "9.8k"
    },
    status: "Active",
    featured: false
  },
  {
    title: "Blockchain Wallet",
    description: "A secure cryptocurrency wallet with multi-coin support, transaction history, and portfolio tracking. Built with security best practices.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center",
    tags: ["React", "Web3", "Ethereum", "TypeScript", "Metamask"],
    github: "https://github.com/username/crypto-wallet",
    live: "https://wallet-demo.vercel.app",
    metrics: {
      stars: 312,
      forks: 98,
      views: "15.2k"
    },
    status: "In Development",
    featured: true
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chat assistant powered by OpenAI API with context awareness, conversation memory, and custom knowledge base integration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
    tags: ["Next.js", "OpenAI", "Vector DB", "Tailwind", "Vercel"],
    github: "https://github.com/username/ai-chat",
    live: "https://ai-chat-demo.vercel.app",
    metrics: {
      stars: 445,
      forks: 123,
      views: "22.1k"
    },
    status: "Active",
    featured: true
  }
];

const statusColors = {
  "Active": "bg-green-100 text-green-800 border-green-200",
  "Completed": "bg-blue-100 text-blue-800 border-blue-200",
  "In Development": "bg-yellow-100 text-yellow-800 border-yellow-200"
};

export function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, from full-stack applications to innovative solutions.
            Each project demonstrates different aspects of modern web development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            🌟 Featured Work
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Card className="card-hover h-full overflow-hidden">
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className={`text-xs ${statusColors[project.status as keyof typeof statusColors]}`}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <span>{project.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                    
                    {/* Metrics */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.metrics.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.metrics.forks}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {project.metrics.views}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      <Button asChild className="flex-1">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            💼 Other Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className={`text-xs ${statusColors[project.status as keyof typeof statusColors]}`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col pt-0">
                    <p className="text-gray-600 text-sm mb-3 flex-1 line-clamp-3">{project.description}</p>
                    
                    {/* Metrics */}
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {project.metrics.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {project.metrics.forks}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-auto">
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <Button asChild size="lg">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
