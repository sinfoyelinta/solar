"use client";

import { motion } from "framer-motion";
import { Zap, Building2, Factory, CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "Residential Solar",
        description: "Tailored energy solutions for homes, maximizing savings and sustainability with premium aesthetic installations.",
        icon: Zap,
        color: "bg-amber-500",
    },
    {
        title: "Commercial Systems",
        description: "Scalable solar power for businesses to reduce operational costs and enhance corporate environmental profiles.",
        icon: Building2,
        color: "bg-blue-500",
    },
    {
        title: "Industrial Plants",
        description: "High-capacity engineering for industrial sectors, delivering massive power output and long-term reliability.",
        icon: Factory,
        color: "bg-emerald-500",
    },
];

const features = [
    "End-to-End System Design",
    "Professional Installation",
    "24/7 Service Support",
    "Government Subsidy Handling",
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">What We Offer</h2>
                    <p className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Expert Solar Engineering</p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700"
                        >
                            <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${service.color.split('-')[1]}-200`}>
                                <service.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="glass p-12 rounded-[2rem] border border-primary/10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-6">Why Choose Yelinta?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <span className="text-primary font-mono text-sm uppercase tracking-widest mb-2 block font-bold">Approved Vendor</span>
                            <h4 className="text-2xl font-bold mb-4">Government Subsidy Projects</h4>
                            <p className="text-slate-400 mb-6"> We specialize in MNRE/KSEB subsidy schemes for residential rooftop solar systems, making clean energy more affordable than ever.</p>
                            <button className="bg-white text-slate-900 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary transition-colors">
                                Learn About Subsidies
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Zap className="w-32 h-32" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
