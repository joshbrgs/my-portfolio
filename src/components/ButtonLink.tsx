// ButtonLink.tsx
import React from "react";

interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = (
    { href, children, className = "" },
) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 text-black bg-white border-4 border-black shadow-[4px_4px_0px_#000] 
        hover:shadow-[6px_6px_0px_#000] active:shadow-[2px_2px_0px_#000] focus:outline-none focus:ring-2 focus:ring-black 
        transition-transform transform hover:-translate-x-1 hover:-translate-y-1 ${className}`}
        >
            {children}
        </a>
    );
};

export default ButtonLink;
