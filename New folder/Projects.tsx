import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Play, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
    image: "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NjU1ODgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
    features: [
      "Real-time inventory tracking",
      "Payment processing integration",
      "Admin analytics dashboard",
      "Mobile-responsive design"
    ],
    metrics: {
      users: "10K+",
      performance: "99.9%",
      rating: "4.8/5"
    },
    links: {
      live: "https://example-ecommerce.com",
      github: "https://github.com/alexjohnson/ecommerce",
      demo: true
    },
    status: "Live",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and advanced project analytics.",
    image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzU2NjQyODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Chart.js"],
    features: [
      "Real-time collaboration",
      "Drag & drop interface",
      "Time tracking",
      "Progress analytics"
    ],
    metrics: {
      users: "5K+",
      performance: "99.5%",
      rating: "4.6/5"
    },
    links: {
      live: "https://taskmaster-app.com",
      github: "https://github.com/alexjohnson/taskmaster",
      demo: true
    },
    status: "Live",
    featured: false
  },
  {
    title: "Analytics Dashboard",
    description: "Business intelligence dashboard with interactive charts, data visualization, and automated reporting for enterprise clients.",
    image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc1NjYxODQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Apache Kafka"],
    features: [
      "Interactive data visualization",
      "Real-time data streaming",
      "Automated report generation",
      "Custom dashboard builder"
    ],
    metrics: {
      users: "2K+",
      performance: "99.8%",
      rating: "4.9/5"
    },
    links: {
      live: "https://analytics-pro.com",
      github: "https://github.com/alexjohnson/analytics",
      demo: true
    },
    status: "Live",
    featured: true
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot with natural language processing, context awareness, and integration with multiple platforms.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kZSUyMHNjcmVlbiUyMGFic3RyYWN0fGVufDF8fHx8MTc1NjY1NjQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Python", "TensorFlow", "Flask", "WebSocket", "OpenAI"],
    features: [
      "Natural language understanding",
      "Multi-platform integration",
      "Context-aware responses",
      "Learning capabilities"
    ],
    metrics: {
      users: "1K+",
      performance: "99.2%",
      rating: "4.7/5"
    },
    links: {
      live: "https://ai-assistant.com",
      github: "https://github.com/alexjohnson/ai-chat",
      demo: true
    },
    status: "Beta",
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in full-stack development, featuring modern 
            technologies and innovative solutions that deliver real business value.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-gradient-to-br from-card to-card/50">
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : ''} gap-0`}>
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className={`w-full object-cover ${project.featured ? 'h-80' : 'h-48'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge 
                          variant={project.status === 'Live' ? 'default' : 'secondary'}
                          className="bg-background/90 backdrop-blur-sm"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 space-y-6">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div>
                        <h4 className="font-semibold mb-3">Project Metrics</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="font-semibold text-primary">{project.metrics.users}</div>
                            <div className="text-xs text-muted-foreground">Active Users</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-primary">{project.metrics.performance}</div>
                            <div className="text-xs text-muted-foreground">Uptime</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-primary">{project.metrics.rating}</div>
                            <div className="text-xs text-muted-foreground">User Rating</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        <Button className="group">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </Button>
                        <Button variant="outline" className="group">
                          <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                          Source Code
                        </Button>
                        {project.links.demo && (
                          <Button variant="ghost" className="group">
                            <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                            Video Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}