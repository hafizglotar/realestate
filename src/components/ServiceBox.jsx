import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ServiceBox = ({serviceTitle, serviceLink, serviceBoxImage, altText}) => {
    return (
        <div className='w-1/4 relative rounded-2xl overflow-hidden'>
            <Link href={serviceLink}>
                <Image 
                    className='object-cover h-full w-full'
                    src={serviceBoxImage} 
                    alt={altText}
                    width={1000}
                    height={1000}
                />
                <div className='rounded-l-2xl rounded-b-2xl absolute bottom-0 w-full p-6 bg-gradient-to-t from-[#2f2f2f] to-transparent to-transparent'>
                    <h1 className='text-white'>{serviceTitle}</h1>
                </div>
            </Link>
        </div>
    )
}

export default ServiceBox