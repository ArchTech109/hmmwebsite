import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Ghost, 
  Code, 
  Globe, 
  Cpu,
  ArrowRight,
  Download,
  Terminal
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { CodeDisplay } from "@/components/CodeDisplay";
import { useLatestScript } from "@/hooks/use-script";

export default function Home() {
  const { data: script, isLoading } = useLatestScript();

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-20 pointer-events-none animate-pulse" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              v2.0 Now Available
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight">
              DOMINATE WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">
                JULIAN GUI
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              The most advanced serversided execution environment available freely. 
              Undetectable, lightweight, and engineered for performance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('script')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-[0_0_30px_rgba(0,255,157,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-2 group"
              >
                <span>Get Script</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Abilities Section */}
      <section id="features" className="py-24 px-6 bg-black/40 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ultimate <span className="text-primary">Abilities</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A powerful require script hub featuring a diverse range of abilities to give you the upper hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Zap}
              title="Instant Require"
              description="High-speed require loading system that fetches and executes modules in milliseconds."
              delay={0.1}
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Advanced Security"
              description="Built-in protection layers that safeguard your execution and keep the hub undetectable."
              delay={0.2}
            />
            <FeatureCard 
              icon={Terminal}
              title="Multi-Ability Hub"
              description="Access a vast library of integrated abilities ranging from utility tools to powerful combat scripts."
              delay={0.3}
            />
            <FeatureCard 
              icon={Globe}
              title="Serversided"
              description="Direct server manipulation capabilities allow for powerful interactions usually restricted to admins."
              delay={0.4}
            />
            <FeatureCard 
              icon={Code}
              title="Modular Architecture"
              description="A clean, modular script structure that allows for easy expansion and consistent performance."
              delay={0.5}
            />
            <FeatureCard 
              icon={Cpu}
              title="Automatic Patches"
              description="The hub automatically detects game updates and applies necessary patches to keep everything working."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Script Section */}
      <section id="script" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
                Get the <span className="text-primary">Source</span>
              </h2>
              <p className="text-muted-foreground">
                Copy the loader script below and execute it in your preferred executor.
              </p>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              STATUS: WORKING
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isLoading ? (
              <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-12 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <p className="text-muted-foreground font-mono text-sm">Fetching latest version...</p>
                </div>
              </div>
            ) : (
              <CodeDisplay 
                code={script?.content || "-- Script unavailable"} 
                title={script?.title || "loader.lua"}
              />
            )}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              By using this software, you agree to our Terms of Service.
            </p>
            <div className="inline-flex gap-4">
               <button className="text-sm text-white/50 hover:text-white transition-colors">
                 Documentation
               </button>
               <button className="text-sm text-white/50 hover:text-white transition-colors">
                 Support Discord
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-lg tracking-wider">
              SERVER<span className="text-primary">SIDING</span>
            </span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ServerSiding. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
