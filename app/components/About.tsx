"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, GraduationCap, Award, Target, Users } from "lucide-react";

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and architected microservices solutions.",
    achievements: [
      "Increased application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams.",
    achievements: [
      "Delivered 15+ successful projects",
      "Reduced bug reports by 50%",
      "Improved code review process",
    ],
  },
  {
    title: "Frontend Developer",
    company: "StartupCo",
    location: "Austin, TX",
    period: "2018 - 2020",
    description:
      "Built responsive web applications and implemented modern UI/UX designs. Worked in fast-paced startup environment.",
    achievements: [
      "Built 10+ responsive web apps",
      "Optimized loading times by 60%",
      "Collaborated with UX team",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2016 - 2018",
    gpa: "3.9/4.0",
    specialization: "Software Engineering & AI",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2012 - 2016",
    gpa: "3.8/4.0",
    specialization: "Computer Science & Mathematics",
  },
];

const highlights = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "5+ Years Experience",
    description: "Professional software development",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "50+ Projects",
    description: "Successfully delivered applications",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "99% Success Rate",
    description: "On-time project delivery",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Advanced Degree",
    description: "MS in Computer Science",
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
              <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
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
                <CardTitle className="flex items-center gap-3 text-2xl">
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
                        <Badge variant="outline" className="text-xs w-fit">
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
                <CardTitle className="flex items-center gap-3 text-2xl">
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
                        <Badge variant="outline" className="text-xs w-fit">
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
