import React, { HTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}
const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`border mx-auto w-full py-2 rounded-lg bg-black text-violet-500 font-semibold active:scale-105 transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
