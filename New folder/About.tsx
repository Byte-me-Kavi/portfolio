import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Award, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Lead development of cloud-native applications serving 1M+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Reduced system latency by 40%",
      "Led team of 5 engineers",
      "Implemented CI/CD pipelines"
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    location: "New York, NY",
    description: "Built responsive web applications using React and Node.js. Collaborated with design team to create intuitive user experiences.",
    achievements: [
      "Delivered 15+ projects on time",
      "Improved code coverage to 95%",
      "Integrated payment systems"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Innovation Labs",
    period: "2019 - 2020",
    location: "Boston, MA",
    description: "Developed internal tools and assisted with API development. Gained experience in agile development methodologies.",
    achievements: [
      "Created automation scripts",
      "Reduced manual work by 60%",
      "Learned DevOps practices"
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2018 - 2020",
    gpa: "3.9/4.0",
    focus: "Machine Learning & Distributed Systems"
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "MIT",
    period: "2014 - 2018",
    gpa: "3.8/4.0",
    focus: "Software Architecture & Algorithms"
  }
];

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Technologies Mastered", value: "25+" },
  { label: "Team Members Led", value: "15+" }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software engineer with 5+ years of experience building scalable applications 
            and leading development teams. I thrive on solving complex problems and creating 
            innovative solutions that drive business growth.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-6 bg-card rounded-lg border"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Users className="mr-3 h-6 w-6 text-primary" />
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="text-primary font-medium">{exp.company}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <Award className="mr-2 h-4 w-4 text-primary" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                        <div className="text-primary font-medium mb-2">{edu.school}</div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                          <span>{edu.period}</span>
                          <span>GPA: {edu.gpa}</span>
                        </div>
                        <Badge variant="secondary">{edu.focus}</Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBkZXZlbG9wZXIlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTY2NTY0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional coding setup"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-4">What drives me</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in the power of technology to solve real-world problems. 
                    When I'm not coding, you'll find me contributing to open-source projects, 
                    mentoring aspiring developers, or exploring the latest in AI and machine learning.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}