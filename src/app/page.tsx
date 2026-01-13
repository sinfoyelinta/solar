import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Services />
      <Contact />

      <footer className="py-20 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14">
                  <Image
                    src="/logo.png"
                    alt="Yelinta Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                    YELINTA<span className="text-primary font-extrabold"> ENGINEERING AND SERVICES</span>
                  </span>
                  <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase mt-1">
                    Towards Technology Revolution
                  </span>
                </div>
              </div>
              <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
                A trusted solar energy solutions provider committed to delivering reliable, efficient, and affordable power systems for residential, commercial, and industrial customers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:gap-24">
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900 dark:text-white">Quick Links</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                  <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900 dark:text-white">Support</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
            <p>© 2026 Yelinta Engineering and Services. All Rights Reserved.</p>
            <div className="flex gap-6 uppercase tracking-widest">
              <span>Approved Vendor</span>
              <span className="text-primary">Government Subsidy Projects</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Background Decorative Blob */}
      <div className="fixed -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/5 blur-[150px] pointer-events-none z-[-1]" />
    </main>
  );
}
