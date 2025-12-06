import React from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-brand-600 hover:bg-brand-500 text-slate-950 shadow-glow hover:shadow-glow/80",
  ghost:
    "bg-slate-900/40 hover:bg-slate-800/70 text-slate-100 border border-slate-700 hover:border-brand-500",
};

export function Button({ children, variant = "primary", className = "", icon: Icon, ...rest }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${variants[variant]} ${className}`}
      {...rest}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.button>
  );
}
