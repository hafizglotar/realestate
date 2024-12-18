import React from 'react'

const TiktokIcon = ({svgWidth, svgHeight, svgColor}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width={svgWidth}
            height={svgHeight}
            fill={svgColor}
            viewBox="0 0 30.88 30.69"
        >
            <defs>
                <style>
                {`.cls-1 {
                    strokeWidth: 0px;
                }`}
                </style>
            </defs>
            <path className="cls-1" d="M15.44,0C6.91,0,0,6.91,0,15.44s6.91,15.44,15.44,15.44,15.44-6.91,15.44-15.44S23.97,0,15.44,0ZM23.46,13.67h0c-.16,0-.31.02-.47.02-1.74,0-3.36-.87-4.32-2.33v7.94c0,3.25-2.63,5.87-5.87,5.87s-5.87-2.63-5.87-5.87,2.63-5.87,5.87-5.87c.13,0,.24.02.37.03v2.89c-.12-.02-.24-.03-.37-.03-1.65,0-2.99,1.34-2.99,2.99s1.34,3,2.99,3,3.12-1.31,3.12-2.96l.03-13.5h2.77c.26,2.48,2.26,4.42,4.76,4.6v3.22Z"/>
        </svg>
    )
}

export default TiktokIcon