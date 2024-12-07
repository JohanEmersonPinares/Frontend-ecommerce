import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Título Sección Contacto */}
      <div className="text-center text-3xl font-extrabold pt-10 pb-6 border-t border-gray-300">
        <Title text1={'CONTACTA'} text2={'CON NOSOTROS'} />
      </div>

      {/* Sección de Información de Contacto */}
      <div className="my-10 px-6 md:px-12 flex flex-col md:flex-row gap-10 justify-between items-center mb-28">
        <img
          className="w-full md:w-1/2 max-w-[480px] rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          src={assets.contact_img}
          alt="Imagen de contacto"
        />
        <div className="flex flex-col justify-start gap-6 w-full md:w-1/2 text-gray-700">
          <p className="text-xl font-semibold text-gray-800">Nuestra Tienda</p>
          <p className="text-lg text-gray-600">Calle San Martin B3 <br /> Huaro, Quispicanchi, Cusco</p>
          <p className="text-lg text-gray-600">Tel: (+51) 913475418 <br /> Email: johan_kyurem@hotmail.com</p>

          <p className="text-xl font-semibold text-gray-800 mt-6">Carreras en KYUREM</p>
          <p className="text-lg text-gray-600">Descubre más sobre nuestros equipos y vacantes de trabajo.</p>

          {/* Botón de explorar trabajos */}
          <button className="border-2 border-black text-sm font-medium px-8 py-4 rounded-lg hover:bg-black hover:text-white transition duration-300 transform hover:scale-105">
            Explorar Ofertas de Trabajo
          </button>
        </div>
      </div>

      {/* Newsletter Box */}
      <NewsletterBox />

    </div>
  )
}

export default Contact
