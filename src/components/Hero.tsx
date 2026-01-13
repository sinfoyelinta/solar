"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Luxury Solar Villa"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Leading Solar Innovation
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 drop-shadow-sm text-white">
                        Powering the <span className="text-primary italic">Revolution</span>
                    </h1>
                    <p className="text-xl text-slate-200 mb-10 max-w-lg leading-relaxed">
                        Reliable, efficient, and affordable solar power systems for a sustainable tomorrow. Approved vendor for government subsidy rooftop projects.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                            Start Your Transition
                        </button>
                        <button className="glass border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                            Our Services
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Scroll</span>
            </motion.div>
        </section>
    );
}
