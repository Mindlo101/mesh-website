"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Plug,
  CheckCircle,
  Shield,
  Zap,
  Users,
  Award,
} from "lucide-react";

/* ---------- DATA ---------- */
const services = [
  {
    icon: <Code className="w-7 h-7" />,
    title: "Web Development",
    desc: "Fast, responsive websites and web apps built with React, Next.js, and modern frameworks.",
    features: ["Responsive Design", "SEO Optimized", "High Performance"],
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile Apps",
    desc: "Native and cross-platform apps for iOS and Android using Flutter and React Native.",
    features: ["Cross-Platform", "Native Performance", "Store Ready"],
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: "Custom Software",
    desc: "Enterprise-grade systems tailored to your unique business logic and workflows.",
    features: ["Scalable", "Secure", "Fully Custom"],
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "Cloud Solutions",
    desc: "Scalable, secure cloud infrastructure deployed on AWS, Azure, and Google Cloud.",
    features: ["Auto-Scaling", "Cost Optimized", "High Uptime"],
  },
  {
    icon: <Plug className="w-7 h-7" />,
    title: "API Development",
    desc: "RESTful and GraphQL APIs that connect your systems and third-party services.",
    features: ["RESTful APIs", "GraphQL", "Secure Auth"],
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "UI/UX Design",
    desc: "Beautiful, user-friendly interfaces that convert visitors into loyal customers.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
];

const clients = [
  {
    name: "BrightPath",
    logo: "/clients/brightpath-logo.png",
    type: "Learning Platform",
  },
  {
    name: "Paperman Solutions",
    logo: "/clients/paperman-logo.png",
    type: "Loan Management System",
  },
  {
    name: "BPS Pay",
    logo: "/clients/bpspay-logo.png",
    type: "Payroll System",
  },
];

const projects = [
  {
    client: "BrightPath",
    logo: "/clients/brightpath-logo.png",
    industry: "Education · Grade R–3",
    title: "BrightPath Learning Platform",
    description:
      "An interactive e-learning platform for Grade R to 3 students, featuring structured lessons, progress tracking, and parent dashboards.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    client: "Paperman Solutions",
    logo: "/clients/paperman-logo.png",
    industry: "Fintech · Lending",
    title: "Loan Management System",
    description:
      "A complete lending platform handling loan applications, credit scoring, disbursements, and automated repayments for high-volume portfolios.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    client: "BPS Pay",
    logo: "/clients/bpspay-logo.png",
    industry: "HR · Payroll",
    title: "BPS Pay Payroll System",
    description:
      "An enterprise payroll platform managing 1,000+ employees with tax compliance, dynamic payslips, and direct bank deposits.",
    tech: ["Next.js", "Python", "AWS"],
  },
];

const whyUs = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Delivery",
    desc: "We ship production-ready code in weeks, not months.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    desc: "Bank-level security in every line of code we write.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Full-Stack Expertise",
    desc: "From database to UI — we handle the entire stack.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Long-Term Partnership",
    desc: "We build, maintain, and scale with you for the long haul.",
  },
];

const testimonials = [
  {
    quote:
      "Mesh Innovation Hub built our loan management system from the ground up. Their attention to detail and technical expertise exceeded our expectations.",
    author: "Management Team",
    company: "Paperman Solutions",
  },
  {
    quote:
      "The payroll system they delivered has transformed how we manage our workforce. Accurate, fast, and reliable — exactly what we needed.",
    author: "Operations Lead",
    company: "BPS Pay",
  },
  {
    quote:
      "Working with Mesh Innovation Hub on our learning platform was seamless. They understood our vision and delivered a product our students love.",
    author: "Founder",
    company: "BrightPath",
  },
];

/* ---------- PAGE ---------- */
export default function Home() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh bg-grid pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-cyan/5 rounded-full animate-spin-slow" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-cyan/10 rounded-full animate-spin-slow"
            style={{ animationDirection: "reverse" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-brand-cyan text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
                </span>
                Innovate • Connect • Empower
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                Custom Software That{" "}
                <span className="text-gradient">Scales</span> With Your Business
              </h1>

              <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
                From web and mobile apps to enterprise systems — Mesh Innovation Hub
                engineers digital solutions that solve real business problems.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-cyan to-brand-blue text-navy-900 rounded-lg font-semibold hover:shadow-xl hover:shadow-brand-cyan/25 transition-all duration-300"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 rounded-lg font-semibold text-gray-200 hover:border-brand-cyan/50 hover:text-brand-cyan transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan" />
                  <span className="text-sm text-gray-400">3 Trusted Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan" />
                  <span className="text-sm text-gray-400">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan" />
                  <span className="text-sm text-gray-400">Based in Free State</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-brand-blue/10 to-transparent rounded-3xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 w-3/4 h-3/4">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.08, borderColor: "#22d3ee" }}
                        className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl flex items-center justify-center transition-all duration-300"
                      >
                        {i === 0 && <Code className="w-7 h-7 text-brand-cyan" />}
                        {i === 2 && <Smartphone className="w-7 h-7 text-brand-blue" />}
                        {i === 4 && <Database className="w-7 h-7 text-brand-cyan" />}
                        {i === 6 && <Cloud className="w-7 h-7 text-brand-blue" />}
                        {i === 8 && <Palette className="w-7 h-7 text-brand-cyan" />}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-4 border border-brand-cyan/10 rounded-3xl" />
                <div className="absolute -inset-8 border border-brand-cyan/5 rounded-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CLIENT LOGOS ==================== */}
      <section className="py-20 bg-navy-800/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-brand-cyan uppercase tracking-[0.2em] mb-3">
              Trusted By Industry Leaders
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Real businesses running on systems we built
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center h-32 shadow-lg"
              >
                <div className="relative w-full h-16">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-3 font-medium">{client.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-brand-cyan uppercase tracking-[0.2em] mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Full-Cycle Development for{" "}
              <span className="text-gradient">Every Platform</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From a single landing page to a full enterprise system — we handle the
              entire lifecycle of your digital product.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 hover-lift group"
              >
                <div className="mb-5 p-3 bg-brand-cyan/10 rounded-xl inline-block group-hover:bg-brand-cyan/20 transition-colors text-brand-cyan">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-gray-300 flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PROJECTS ==================== */}
      <section className="py-24 bg-navy-800/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-brand-cyan uppercase tracking-[0.2em] mb-3">
              Featured Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Systems That Power{" "}
              <span className="text-gradient">Real Businesses</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We&apos;ve designed and built software across education, fintech, and HR —
              each tailored to the client&apos;s unique workflows.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 hover-lift group"
              >
                <div className="bg-white rounded-xl p-4 h-20 mb-6 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.logo}
                      alt={project.client}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-2">
                  {project.industry}
                </p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-navy-800/60 rounded-full text-xs text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY US ==================== */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-brand-cyan uppercase tracking-[0.2em] mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Built Different, <span className="text-gradient">Delivered Better</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover-lift text-center"
              >
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 bg-navy-800/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-brand-cyan uppercase tracking-[0.2em] mb-3">
              What Clients Say
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by the <span className="text-gradient">People We Build For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 hover-lift"
              >
                <div className="text-brand-cyan text-4xl leading-none mb-4 font-serif">
                  &ldquo;
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="font-semibold text-sm text-white">{t.author}</p>
                  <p className="text-xs text-brand-cyan mt-1">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 bg-gradient-to-br from-brand-cyan/5 via-brand-blue/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Build Something{" "}
              <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your project and turn your vision into reality.
              Book a free consultation — no obligations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-blue text-navy-900 rounded-lg font-semibold hover:shadow-2xl hover:shadow-brand-cyan/25 transition-all text-lg"
              >
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 rounded-lg font-semibold text-gray-200 hover:border-brand-cyan/50 hover:text-brand-cyan transition-all text-lg"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}