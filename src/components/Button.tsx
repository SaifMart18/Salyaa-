import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  icon,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:opacity-50";
  
  const variants = {
    primary: "bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg glow-blue",
    secondary: "bg-brand-gray/50 hover:bg-brand-gray text-white border border-white/10",
    outline: "bg-transparent border-2 border-white/20 hover:border-brand-blue text-white",
    ghost: "bg-transparent hover:bg-white/5 text-white/70 hover:text-white"
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );
}
