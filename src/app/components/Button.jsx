import Link from 'next/link';
import React from 'react';

const Button = ({ href, text, className }) => {
    return (
        <div>
            <Link href={href} className={`bg-[#ff784b] shadow hover:shadow-none duration-300 text-white px-4 py-2 rounded-md ${className}`}>
                {text}
            </Link>
        </div>
    );
};

export default Button;