// src/components/LinkButton.jsx

import Link from 'next/link';
import React from 'react';

const LinkButton = ({ href, children, color, hoverColor, hoverTextColor }) => {
    const buttonStyle = {
        minWidth: '200px',
        textAlign: 'center',
        backgroundImage: color || 'linear-gradient(to right, #54bbf0, #65d5f1)', // Default gradient
        padding: '8px 36px',
        color: hoverTextColor || '#fff', // Default text color
        fontSize: '14px',
        fontWeight: '400',
        borderRadius: '7px',
        display: 'inline-block',
        border: `1px solid transparent`, // Default border color
        outline: 'none',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textDecoration: 'none',
        position: 'relative',
        transition: 'all 0.3s ease', // Smooth transition for hover effect
    };
    return (
        <Link href={href} style={buttonStyle}>
            {children}
        </Link>
    );
};

export default LinkButton;