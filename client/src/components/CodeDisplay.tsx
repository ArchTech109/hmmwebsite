import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Copy, Check, Terminal } from "lucide-react";
import { motion } from "framer-motion";

interface CodeDisplayProps {
  code: string;
  title?: string;
}

export function CodeDisplay({ code, title = "main.lua" }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="ml-4 flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Terminal className="w-3 h-3" />
            <span>{title}</span>
          </div>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-white hover:bg-white/10 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy Raw</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="relative group">
        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-mono border border-primary/30 backdrop-blur-sm">
            LUA
          </div>
        </div>
        
        <Highlight
          theme={themes.vsDark}
          code={code}
          language="lua"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre 
              className={`${className} p-6 overflow-x-auto text-sm font-mono leading-relaxed`} 
              style={{ ...style, background: 'transparent' }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  <span className="table-cell select-none text-right pr-6 text-white/20 w-8">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
