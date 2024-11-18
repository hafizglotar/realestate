import React from 'react'
import Image from 'next/image'
const OffPlanBanner = ({imgSrc, imgAlt, imgWidth, imgHeight}) => {
  return (
        <Image 
            src={imgSrc}
            alt={imgAlt}
            // width={imgWidth} 
            // height={imgHeight} 
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Ensures the image covers the container
        />
    )
}

export default OffPlanBanner