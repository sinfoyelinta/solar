"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-white/5 shadow-2xl">
                    {/* Decorations */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to revolutionize your energy?</h2>
                            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                                Join hundreds of satisfied customers who have switched to Yelinta's high-efficiency solar solutions.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-tight">Email Us</p>
                                        <a href="mailto:salesdesk@yelinta.com" className="text-lg font-medium hover:text-primary transition-colors">salesdesk@yelinta.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-tight">Call Now</p>
                                        <a href="tel:+916382721969" className="text-lg font-medium hover:text-primary transition-colors">+91 63827 21969</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 text-white">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-tight">Office Address</p>
                                        <p className="text-lg font-medium leading-relaxed">
                                            780/A1, Sankarankovil Rd, Annamaraja Nagar,<br />
                                            Opp. to New Bus stand Traffic Police station,<br />
                                            Rajapalayam, Tamil Nadu 626117
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400">Full Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400">Phone</label>
                                        <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+91 00000 00000" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400">Project Type</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                                        <option className="bg-slate-900">Residential Rooftop</option>
                                        <option className="bg-slate-900">Commercial Setup</option>
                                        <option className="bg-slate-900">Industrial Solar Plant</option>
                                        <option className="bg-slate-900">Government Subsidy Inquiry</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400">Message</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    Send Inquiry <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
