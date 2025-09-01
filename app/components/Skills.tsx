"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "C/C++", level: 70 },
      { name: "PHP", level: 70 },
      { name: "Kotlin", level: 65 },
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Vue.js", level: 75 },
      { name: "Node.js", level: 75 },
      { name: "NestJS", level: 70 },
      { name: "GSAP", level: 70 },
    ],
  },
  {
    title: "Database & Storage",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85 },
      { name: "Linux", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Code Blocks", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Photoshop", level: 65 },
      { name: "Illustrator", level: 60 },
    ],
  },
];

const techStack = [
  { name: "React", category: "Frontend", level: "Advanced" },
  { name: "Next.js", category: "Framework", level: "Advanced" },
  { name: "TypeScript", category: "Language", level: "Advanced" },
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "Python", category: "Language", level: "Intermediate" },
  { name: "AWS", category: "Cloud", level: "Intermediate" },
  { name: "Docker", category: "DevOps", level: "Advanced" },
  { name: "PostgreSQL", category: "Database", level: "Advanced" },
  { name: "MongoDB", category: "Database", level: "Intermediate" },
  { name: "Redis", category: "Cache", level: "Intermediate" },
  { name: "GraphQL", category: "API", level: "Intermediate" },
  { name: "Prisma", category: "ORM", level: "Advanced" },
  { name: "TailwindCSS", category: "Styling", level: "Advanced" },
  { name: "Jest", category: "Testing", level: "Intermediate" },
  { name: "Git", category: "VCS", level: "Advanced" },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional",
  "Docker Certified Associate",
  "React Developer Certification",
  "Node.js Application Developer",
];

const softSkills = [
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
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and
            technologies I work with
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
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
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
                          delay: index * 0.5,
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
                            delay: 0.3 + skillIndex * 0.1,
                            duration: 0.6,
                          }}
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <motion.span
                              className="text-sm text-gray-600"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.6 + skillIndex * 0.1 }}
                              viewport={{ once: true, amount: 0.2 }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 absolute top-0 left-0"
                              style={{ minWidth: "2px" }}
                              initial={{ width: "0%" }}
                              whileInView={{
                                width: `${skill.level}%`,
                              }}
                              transition={{
                                duration: 2,
                                delay: 0.7 + skillIndex * 0.1,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true, amount: 0.2 }}
                              whileHover={{
                                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                                transition: { duration: 0.3 },
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.div
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
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
                      ease: "easeInOut",
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
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3 },
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary transition-all duration-300 cursor-pointer"
                    >
                      <motion.div
                        className="font-semibold text-sm"
                        whileHover={{
                          color: "#3b82f6",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {tech.name}
                      </motion.div>
                      <motion.div
                        className="text-xs text-gray-500 mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {tech.category}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        viewport={{ once: true, amount: 0.3 }}
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
        </motion.div>

        {/* Certifications & Soft Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
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
                        ease: "easeInOut",
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
                          ease: "easeOut",
                        }}
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer"
                      >
                        <motion.div
                          className="font-medium text-gray-800"
                          whileHover={{
                            color: "#3b82f6",
                            transition: { duration: 0.2 },
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

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="skill-card card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <motion.span
                      className="text-2xl"
                      animate={{
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      🤝
                    </motion.span>
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
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 cursor-pointer"
                      >
                        <motion.span
                          className="text-primary"
                          whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.2 },
                          }}
                        >
                          ▪
                        </motion.span>
                        <motion.span
                          className="font-medium"
                          whileHover={{
                            color: "#10b981",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {skill}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
