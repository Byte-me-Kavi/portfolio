"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, GraduationCap, Award, Target, Users } from "lucide-react";

const experience = [
  {
    title: "Computer Science Student",
    company: "University of Kelaniya",
    location: "Sri Lanka",
    period: "2023 - 2027 (Expected)",
    description:
      "Pursuing Bachelor of Science (Honors) in Computer Science. Gaining comprehensive knowledge in programming, algorithms, data structures, and software engineering principles.",
    achievements: [
      "Learning modern web technologies",
      "Building practical projects",
      "Developing problem-solving skills",
    ],
  },
  {
    title: "IT Student",
    company: "ICBT Kandy Campus",
    location: "Kandy, Sri Lanka",
    period: "Completed",
    description:
      "Completed Diploma in IT & English, gaining foundational knowledge in information technology and enhancing English communication skills.",
    achievements: [
      "Strong foundation in IT concepts",
      "Enhanced English proficiency",
      "Technical documentation skills",
    ],
  },
  {
    title: "Academic Excellence",
    company: "Ranabima Royal College",
    location: "Sri Lanka",
    period: "2018 - 2021",
    description:
      "Achieved outstanding results in both Advanced Level and Ordinary Level examinations, demonstrating strong analytical and problem-solving abilities.",
    achievements: [
      "A/L: Combined Math (A), Chemistry (B), Physics (B)",
      "Z-Score: 1.5936",
      "O/L: 9 A passes",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science (Honors) in Computer Science",
    school: "University of Kelaniya",
    location: "Sri Lanka",
    period: "2023 - 2027 (Expected)",
    gpa: "In Progress",
    specialization: "Computer Science & Software Engineering",
  },
  {
    degree: "Diploma in IT & English",
    school: "ICBT Kandy Campus",
    location: "Kandy, Sri Lanka",
    period: "Completed",
    gpa: "Completed",
    specialization: "Information Technology",
  },
];

const highlights = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Academic Excellence",
    description: "A/L Z-Score: 1.5936, 9 A passes at O/L",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Group Projects",
    description: "Collaborative development experience",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Learning Journey",
    description: "Currently mastering React, Vue & GSAP",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Computer Science",
    description: "University of Kelaniya undergraduate",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I&apos;m a passionate software engineer with over 5 years of
            experience building scalable web applications and leading
            development teams. I love solving complex problems and creating
            innovative solutions.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100"
            >
              <div className="flex justify-center mb-4 text-blue-600">
                {highlight.icon}
              </div>
              <h3 className="font-bold text-black text-lg mb-2">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                  <Award className="w-7 h-7 text-blue-600" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-blue-200 pl-6 pb-6 last:pb-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <Badge variant="outline" className="text-xs text-black w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <span className="font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{exp.description}</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-blue-600 mt-1">▪</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                  <GraduationCap className="w-7 h-7 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-blue-200 pl-6 pb-6 last:pb-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">{edu.degree}</h3>
                        <Badge variant="outline" className="text-xs w-fit text-black">
                          {edu.period}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <span className="font-semibold">{edu.school}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">GPA:</span> {edu.gpa}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Specialization:</span>{" "}
                          {edu.specialization}
                        </p>
                      </div>
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
