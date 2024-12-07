import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm sm:text-base'>

        <div className='flex flex-col items-center sm:items-start'>
          <img className='mb-5 w-32' src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 text-center sm:text-left'>
            Bienvenidos a nuestra tienda, donde estilo y calidad se unen para ofrecerte las últimas tendencias en moda. Explora nuestras colecciones y descubre prendas diseñadas para destacar en cualquier ocasión.
          </p>
        </div>

        <div className='flex flex-col items-center sm:items-start'>
          <p className='text-xl font-medium mb-5'>COMPAÑIA</p>
          <ul className='flex flex-col gap-1 text-gray-600 text-center sm:text-left'>
            <li>Home</li>
            <li>Acerca de</li>
            <li>Colecciones</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className='flex flex-col items-center sm:items-start'>
          <p className='text-xl font-medium mb-5'>PONTE EN CONTACTO</p>
          <ul className='flex flex-col gap-1 text-gray-600 text-center sm:text-left'>
            <li>913475418</li>
            <li>johan_kyurem@hotmail.com</li>
          </ul>
        </div>

      </div>

      <div className='text-center'>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ kyurem.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
