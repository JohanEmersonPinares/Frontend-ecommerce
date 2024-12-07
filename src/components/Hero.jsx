import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-200 rounded-xl shadow-md overflow-hidden'>

            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 bg-gradient-to-r from-[#E5D5B3] via-[#D8B8A6] to-[#F1E1C6]'>
                <div className='text-[#2D2D2D] px-8'>
                    <div className='flex items-center gap-3 mb-5'>
                        <p className='w-12 sm:w-16 h-[2px] bg-[#2D2D2D]'></p>
                        <p className='font-medium text-sm sm:text-base text-[#444444] uppercase tracking-wide'>MAS VENDIDOS</p>
                    </div>

                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-[#2D2D2D]'>
                        Últimas llegadas
                    </h1>

                    <div className='flex items-center gap-2 mb-8'>
                        <p className='font-semibold text-sm sm:text-base text-[#333333] tracking-wider'>¡Compra ahora y no te lo pierdas!</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#2D2D2D]'></p>
                    </div>

                    <p className='text-sm text-[#555555] leading-relaxed'>
                        Descubre las últimas tendencias en trajes de hombre, con estilo y sofisticación para destacar en cualquier ocasión.
                    </p>
                </div>
            </div>

            {/* Hero Right Side */}
            <div className='w-full sm:w-1/2'>
                <img
                    className='w-full max-h-[700px] object-cover rounded-lg shadow-lg transition-all transform hover:scale-105 hover:rotate-2 duration-300'
                    src={assets.hero_img}
                    alt="Imagen destacada"
                />
            </div>
        </div>
    );





}

export default Hero
