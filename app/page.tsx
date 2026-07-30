// app/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Database, CheckCircle, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-mesh bg-grid-pattern">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-400/5 rounded-full animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-400/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Engineering digital excellence
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
                Web, Mobile &{" "}
                <span className="text-gradient">
                  Software
                </span>
                <br />
                Built to Scale
              </h1>

              <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
                Mesh Innovation Hub designs and develops custom websites, mobile apps,
                and enterprise systems. We write code that solves real business problems.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-navy-900 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-400/25 transition-all"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all"
                >
                  View Our Work
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-400">10+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-400">100% Client Satisfaction</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - 3D Mesh Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent rounded-3xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 w-3/4 h-3/4">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, borderColor: '#22d3ee' }}
                        className="bg-cyan-400/5 border border-cyan-400/20 rounded-xl flex items-center justify-center transition-all duration-300"
                      >
                        {i === 0 && <Code className="w-7 h-7 text-cyan-400" />}
                        {i === 4 && <Smartphone className="w-7 h-7 text-cyan-400" />}
                        {i === 8 && <Database className="w-7 h-7 text-cyan-400" />}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-4 border border-cyan-400/10 rounded-3xl" />
                <div className="absolute -inset-8 border border-cyan-400/5 rounded-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-navy-800/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <p className="text-sm text-gray-500 font-medium tracking-wider uppercase">Trusted Technologies</p>
            {["React", "Next.js", "Flutter", "Node.js", "Python", "AWS", "PostgreSQL"].map((tech) => (
              <span key={tech} className="text-sm text-gray-400 font-medium">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="text-gradient">Deliver</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full-cycle development for web, mobile, and enterprise software.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Web Development", 
                desc: "Custom websites, web apps, and portals built with React, Next.js, and modern frameworks.",
                icon: <Code className="w-8 h-8 text-cyan-400" />,
                features: ["Responsive Design", "SEO Optimized", "Fast Performance"]
              },
              { 
                title: "Mobile Apps", 
                desc: "Native and cross-platform apps for iOS and Android using Flutter, React Native, and Swift.",
                icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
                features: ["Cross-Platform", "Native Performance", "App Store Ready"]
              },
              { 
                title: "Enterprise Software", 
                desc: "Custom systems, APIs, and cloud solutions that automate and scale your business.",
                icon: <Database className="w-8 h-8 text-cyan-400" />,
                features: ["Scalable", "Secure", "Cloud Ready"]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 hover-lift group"
              >
                <div className="mb-4 p-3 bg-cyan-400/10 rounded-xl inline-block group-hover:bg-cyan-400/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-300 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and turn your vision into reality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-navy-900 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-400/25 transition-all text-lg"
            >
              Start Your Project <Zap className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}