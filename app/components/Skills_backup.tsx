"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
      { name: "Go", level: 65 },
      { name: "PHP", level: 60 },
    ],
  },
  {
    title: "Database & Storage",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MySQL", level: 85 },
      { name: "Elasticsearch", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "NGINX", level: 75 },
      { name: "Terraform", level: 65 },
    ],
  },
];

const techStack = [
  { name: "React", category: "Frontend", level: "Advanced" },
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "TypeScript", category: "Language", level: "Advanced" },
  { name: "Python", category: "Language", level: "Intermediate" },
  { name: "AWS", category: "Cloud", level: "Intermediate" },
  { name: "PostgreSQL", category: "Database", level: "Advanced" },
  { name: "Docker", category: "DevOps", level: "Advanced" },
  { name: "GraphQL", category: "API", level: "Intermediate" },
  { name: "Jest", category: "Testing", level: "Advanced" },
  { name: "Figma", category: "Design", level: "Intermediate" },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: "🏆",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    icon: "🥇",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    date: "2023",
    icon: "🎖️",
  },
];

const softSkills = [
  "Leadership & Team Management",
  "Problem Solving",
  "Communication",
  "Project Management",
  "Mentoring",
  "Strategic Planning",
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and
            technologies I use to build exceptional software solutions.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="skill-card card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <motion.span 
                        className="text-2xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        {category.icon}
                      </motion.span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: 0.5 + (skillIndex * 0.1),
                            duration: 0.6 
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <motion.span 
                              className="text-sm text-gray-600"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 1 + (skillIndex * 0.1) }}
                              viewport={{ once: true }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                              initial={{ width: 0, x: -20 }}
                              whileInView={{ 
                                width: `${skill.level}%`,
                                x: 0
                              }}
                              transition={{ 
                                duration: 1.5, 
                                delay: 0.8 + (skillIndex * 0.1),
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                              whileHover={{
                                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                                transition: { duration: 0.3 }
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="skill-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <motion.span 
                  className="text-2xl"
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🛠️
                </motion.span>
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.05,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary transition-all duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className="font-semibold text-sm"
                      whileHover={{ 
                        color: "#3b82f6",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech.name}
                    </motion.div>
                    <motion.div 
                      className="text-xs text-gray-500 mt-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + (index * 0.05) }}
                      viewport={{ once: true }}
                    >
                      {tech.category}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (index * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant={
                          tech.level === "Advanced" ? "default" : "secondary"
                        }
                        className="mt-2 text-xs"
                      >
                        {tech.level}
                      </Badge>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications & Soft Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="skill-card card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <motion.span 
                      className="text-2xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      📜
                    </motion.span>
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, x: -20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                        viewport={{ once: true }}
                        className="p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer"
                      >
                        <motion.div 
                          className="font-medium text-gray-800"
                          whileHover={{ 
                            color: "#3b82f6",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {cert}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200"
                    >
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-primary">{cert.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="skill-card card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">🤝</span>
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
                    >
                      <span className="text-primary">▪</span>
                      <span className="font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
