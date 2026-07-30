// app/services/page.tsx
"use client";
import { motion } from "framer-motion";
import { Code, Smartphone, Database, Globe, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-cyan-400" />,
    title: "Web Development",
    description: "Custom websites, e-commerce platforms, and web portals built with modern frameworks like React, Next.js, and Vue.js.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android using Flutter, React Native, and Swift.",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"]
  },
  {
    icon: <Database className="w-8 h-8 text-cyan-400" />,
    title: "Custom Software",
    description: "Enterprise-grade software solutions including ERPs, CRMs, inventory systems, and automation tools.",
    features: ["Scalable Architecture", "API Integrations", "Cloud Ready"]
  },
  {
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    title: "Digital Transformation",
    description: "Modernize legacy systems and digitize manual processes for improved efficiency and growth.",
    features: ["Process Automation", "Data Migration", "Digital Strategy"]
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
    title: "Cloud Solutions",
    description: "Cloud-native development and deployment on AWS, Azure, and Google Cloud platforms.",
    features: ["Scalable Infrastructure", "DevOps", "Security First"]
  },
  {
    icon: <Shield className="w-8 h-8 text-cyan-400" />,
    title: "System Integration",
    description: "Seamless integration between different systems, databases, and third-party APIs.",
    features: ["API Development", "Data Syncing", "Legacy Integration"]
  }
];

export default function ServicesPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Build</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end development services for web, mobile, and enterprise software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-800/50 rounded-2xl p-6 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4 p-3 bg-cyan-400/10 rounded-xl inline-block group-hover:bg-cyan-400/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}