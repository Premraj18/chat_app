import React from 'react'

const HeroSection = () => {
    return (
        <div className="slide-container">
            <div className='h-[70vh] sm:h-[100vh] sm:pt-20 ' style={{
                backgroundImage: "url(" + "/bgImg.webp" + ")",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.633),rgba(2, 2, 2, 0.633))',
            }}>
                <div className='flex flex-col justify-start items-center h-full w-full' style={{
                    // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.533), rgba(2, 2, 2, 0.533))'
                }}>
                    
                </div>
            </div>

        </div>
    )
}

export default HeroSection
