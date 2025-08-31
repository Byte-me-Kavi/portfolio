import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  Calendar,
  MessageCircle,
  Download,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alex.johnson@email.com",
    href: "mailto:alex.johnson@email.com",
    color: "text-blue-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "text-green-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com/?q=San+Francisco,CA",
    color: "text-red-500"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/alexjohnson",
    color: "text-gray-600",
    username: "@alexjohnson"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexjohnson",
    color: "text-blue-600",
    username: "Alex Johnson"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/alexjohnson",
    color: "text-blue-400",
    username: "@alexjohnson"
  }
];

const availabilityInfo = {
  status: "Open to new opportunities",
  nextAvailable: "January 2024",
  responseTime: "Within 24 hours",
  preferredContact: "Email"
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // In a real app, you would handle the form submission here
    alert('Message sent successfully!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project collaboration"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Availability */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <info.icon className={`h-5 w-5 ${info.color}`} />
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-sm text-muted-foreground">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Status</span>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {availabilityInfo.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Next Available</span>
                    <span className="text-sm font-medium">{availabilityInfo.nextAvailable}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Time</span>
                    <span className="text-sm font-medium">{availabilityInfo.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Preferred Contact</span>
                    <span className="text-sm font-medium">{availabilityInfo.preferredContact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className={`h-5 w-5 ${social.color}`} />
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Download CV */}
            <Card>
              <CardContent className="pt-6">
                <Button className="w-full group" size="lg">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-accent rounded-full">
            <span className="text-sm text-muted-foreground">Prefer a quick chat?</span>
            <Button variant="ghost" size="sm" className="h-auto p-0 text-primary hover:bg-transparent">
              Schedule a call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}