// app/portfolio/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code, Users, Calendar, DollarSign } from "lucide-react";

const projects = [
  {
    title: "Loan Management System",
    description: "A comprehensive platform for lending companies to manage disbursements, repayments, and credit scoring.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    icon: <DollarSign className="w-6 h-6 text-cyan-400" />,
    highlights: [
      "Automated EMI calculations",
      "Credit scoring integration",
      "Default risk tracking",
      "Real-time reporting"
    ]
  },
  {
    title: "Enterprise Payroll System",
    description: "High-accuracy payroll engine handling salaries, taxes, benefits, and compliance for 1,000+ employees.",
    tech: ["Next.js", "Python", "AWS", "PostgreSQL"],
    icon: <Users className="w-6 h-6 text-cyan-400" />,
    highlights: [
      "Automated tax compliance",
      "Dynamic payslip generation",
      "Leave and attendance tracking",
      "Direct bank deposits"
    ]
  }
];

export default function PortfolioPage() {
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Portfolio</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Proven solutions we've built for real businesses.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-navy-800/50 rounded-2xl border border-white/5 overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="p-6 border-b border-white/5 bg-gradient-to-br from-cyan-400/5 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan-400/10 rounded-lg">
                    {project.icon}
                  </div>
                  <h2 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>

              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-navy-900 rounded-full text-xs text-gray-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Discuss a similar project <ExternalLink size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}