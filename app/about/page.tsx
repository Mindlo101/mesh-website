// app/about/page.tsx
"use client";
import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: <Users className="w-6 h-6 text-cyan-400" />, value: "5+", label: "Team Members" },
  { icon: <Target className="w-6 h-6 text-cyan-400" />, value: "10+", label: "Projects Delivered" },
  { icon: <Award className="w-6 h-6 text-cyan-400" />, value: "2", label: "Core Products" },
  { icon: <TrendingUp className="w-6 h-6 text-cyan-400" />, value: "100%", label: "Client Satisfaction" }
];

const values = [
  {
    title: "Innovation First",
    description: "We embrace emerging technologies to build solutions that are future-proof and scalable."
  },
  {
    title: "Quality Code",
    description: "Clean, maintainable, and well-tested code is the foundation of every project we deliver."
  },
  {
    title: "Client Partnership",
    description: "We don't just build software—we build lasting partnerships focused on your success."
  },
  {
    title: "Agile Delivery",
    description: "Transparent, iterative development that keeps you involved at every step."
  }
];

export default function AboutPage() {
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Mesh</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We're a team of passionate developers building digital solutions that make a difference.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-navy-800/50 rounded-xl p-6 text-center border border-white/5"
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-navy-800/30 rounded-2xl p-8 border border-white/5 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            Mesh Innovation Hub was founded with a simple mission: to build software that truly works 
            for businesses. We believe that technology should be an enabler, not a barrier. Our name 
            represents our philosophy—just like a mesh network, we create systems where every part 
            communicates seamlessly, whether it's a mobile app talking to a database, or a website 
            connecting to a payment gateway.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            We've already delivered complex solutions like loan management systems and enterprise 
            payroll platforms. Now we're ready to help your business innovate and scale.
          </p>
        </motion.div>

        {/* Our Values */}
        <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-navy-800/30 rounded-xl p-6 border border-white/5"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}