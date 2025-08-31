"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    detail: "alex.johnson@email.com",
    link: "mailto:alex.johnson@email.com",
    description: "Send me an email anytime",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    detail: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    description: "Call for urgent matters",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    detail: "San Francisco, CA",
    link: "https://maps.google.com/?q=San+Francisco,CA",
    description: "Available for local meetings",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Schedule",
    detail: "Book a Meeting",
    link: "https://calendly.com/alexjohnson",
    description: "Let's schedule a call",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com",
    color: "hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://linkedin.com",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    url: "https://twitter.com",
    color: "hover:text-blue-400",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and innovation.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target={
                    contact.link.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {contact.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-lg mb-1">
                            {contact.title}
                          </h4>
                          <p className="text-gray-900 font-medium mb-1">
                            {contact.detail}
                          </p>
                          <p className="text-sm text-gray-500">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-lg text-gray-600 transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageCircle className="w-7 h-7 text-blue-600" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Response Promise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-2">
              Quick Response Guaranteed
            </h3>
            <p className="text-gray-600">
              I typically respond to all inquiries within 24 hours. Looking
              forward to hearing from you!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
