import { Link } from "wouter";
import { Code2, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider">
              JULIAN<span className="text-primary">GUI</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('script')} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              Get Script
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('script')}
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:shadow-[0_0_20px_rgba(0,255,157,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            <Code2 className="w-4 h-4" />
            <span>EXECUTE</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
