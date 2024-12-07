import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>

      <p className='text-2xl font-medium text-gray-800'>Suscríbete ahora y obtén un 20% de descuento</p>
      <p className='text-gray-400 mt-3'>Suscríbete ahora y recibe un 20% de descuento en tu primera compra. ¡Únete a nuestra comunidad y disfruta de ofertas exclusivas y novedades! </p>

      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="text" placeholder='Enter your email id' required />
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBETE</button>
      </form>

    </div>
  )
}

export default NewsletterBox
