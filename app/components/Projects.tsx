"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Star, GitFork, Eye } from "lucide-react";

const projects = [
  {
    title: "Academy Website",
    description:
      "Collaborative group project to design and develop a responsive academic platform. Built with modern web technologies focusing on user experience and accessibility.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Team Project"],
    github: "https://github.com/Hasindu123198",
    live: "#",
    metrics: {
      stars: 5,
      forks: 2,
      views: "245",
    },
    status: "Completed",
    featured: true,
  },
  {
    title: "Ludo-CS Game Simulation",
    description:
      "Board game simulation developed in C language using data structures and game logic implementation. Features turn-based gameplay with proper rule validation.",
    image:
      "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=600&h=400&fit=crop&crop=center",
    tags: ["C Language", "Data Structures", "Game Logic", "Algorithm Design"],
    github: "https://github.com/Hasindu123198",
    live: "#",
    metrics: {
      stars: 8,
      forks: 3,
      views: "180",
    },
    status: "Completed",
    featured: true,
  },
  {
    title: "Web Form with PHP & MySQL",
    description:
      "Full-stack web form application with JavaScript validation, PHP backend processing, and MySQL database integration. Developed using XAMPP environment.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center",
    tags: ["PHP", "MySQL", "JavaScript", "XAMPP", "Form Validation"],
    github: "https://github.com/Hasindu123198",
    live: "#",
    metrics: {
      stars: 6,
      forks: 4,
      views: "320",
    },
    status: "Completed",
    featured: false,
  },
  {
    title: "Mathematical Symbols Keyboard",
    description:
      "Ongoing group project developing a custom virtual keyboard to simplify mathematical typing. Focus on user interface design and symbol accessibility.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop&crop=center",
    tags: ["JavaScript", "UI/UX", "Virtual Keyboard", "Group Project"],
    github: "https://github.com/Hasindu123198",
    live: "#",
    metrics: {
      stars: 12,
      forks: 6,
      views: "450",
    },
    status: "In Progress",
    featured: false,
  },
  {
    title: "Video Editing App",
    description:
      "Currently building a lightweight, user-friendly video editing tool with essential features. Group project focusing on performance and usability.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&crop=center",
    tags: ["JavaScript", "Video Processing", "UI/UX", "Group Project"],
    github: "https://github.com/Hasindu123198",
    live: "#",
    metrics: {
      stars: 15,
      forks: 8,
      views: "680",
    },
    status: "In Progress",
    featured: false,
  },
  {
    title: "Photo Editing App",
    description:
      "Designing a creative photo editing application with filters and basic adjustments. Group project emphasizing intuitive design and image processing capabilities.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&crop=center",
    tags: ["JavaScript", "Image Processing", "Filters", "Group Project"],
    github: "https://github.com/Hasindu123198",
    live: "#",
    metrics: {
      stars: 10,
      forks: 5,
      views: "380",
    },
    status: "In Progress",
    featured: false,
  },
];

const statusColors = {
  Completed: "bg-green-100 text-green-800 border-green-200",
  "In Progress": "bg-yellow-100 text-yellow-800 border-yellow-200",
};

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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
            A showcase of my recent work, from full-stack applications to
            innovative solutions. Each project demonstrates different aspects of
            modern web development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl text-black font-bold mb-8 text-center"
          > 
            🌟 Featured Work
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" },
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
                        <Badge
                          className={`text-xs ${
                            statusColors[
                              project.status as keyof typeof statusColors
                            ]
                          }`}
                        >
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
                      <p className="text-gray-600 mb-4 flex-1">
                        {project.description}
                      </p>

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
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-auto">
                        <Button asChild className="flex-1">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button asChild variant="outline">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
            className="text-2xl text-black font-bold mb-8 text-center"
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
                      <Badge
                        className={`text-xs ${
                          statusColors[
                            project.status as keyof typeof statusColors
                          ]
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col pt-0">
                    <p className="text-gray-600 text-sm mb-3 flex-1 line-clamp-3">
                      {project.description}
                    </p>

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
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
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
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
            <h3 className="text-2xl text-black font-bold mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <Button asChild size="lg">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
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
