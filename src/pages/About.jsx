import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Título Sección "Nosotros" */}
      <div className="text-4xl font-extrabold text-center pt-8 pb-6 border-t border-gray-300">
        <Title text1={'NOSOTROS'} text2={'QUIENES SOMOS'} />
      </div>

      {/* Sección sobre la empresa */}
      <div className="my-16 px-6 md:px-16 flex flex-col md:flex-row gap-16 bg-white p-8 md:p-16 rounded-2xl shadow-xl">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          src={assets.about_img}
          alt="Imagen sobre nosotros"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-700">
          <p className="text-base md:text-lg leading-relaxed">
            Kyurem nació de la pasión por la innovación y el deseo de revolucionar la forma en que las personas compran en línea. Nuestro viaje comenzó con una idea simple: proporcionar una plataforma donde los clientes puedan descubrir, explorar y comprar una amplia gama de productos desde la comodidad de su hogar.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Desde nuestra creación, hemos trabajado incansablemente para curar una selección diversa de productos de alta calidad que satisfacen todos los gustos y preferencias. Desde moda y belleza hasta electrónicos y productos para el hogar, ofrecemos una extensa colección proveniente de marcas y proveedores de confianza.
          </p>
          <b className="text-gray-800 text-lg">Nuestra Misión</b>
          <p className="text-base md:text-lg leading-relaxed">
            Nuestra misión en Kyurem es empoderar a nuestros clientes con opciones, conveniencia y confianza. Nos dedicamos a proporcionar una experiencia de compra sin interrupciones que supere las expectativas, desde la navegación y el pedido hasta la entrega y más allá.
          </p>
        </div>
      </div>

      {/* Título Sección "Por qué elegirnos" */}
      <div className="text-2xl font-semibold py-6 text-center text-gray-800">
        <Title text1={'POR QUÉ'} text2={'ELEGIRNOS'} />
      </div>

      {/* Sección de Beneficios */}
      <div className="flex flex-col md:flex-row gap-10 text-sm md:text-base mb-20">
        <div className="border px-8 py-12 flex flex-col gap-5 rounded-xl shadow-md bg-white text-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          <b className="text-lg">Garantía de Calidad:</b>
          <p>
            Seleccionamos y verificamos minuciosamente cada producto para asegurar que cumpla con nuestros estrictos estándares de calidad.
          </p>
        </div>
        <div className="border px-8 py-12 flex flex-col gap-5 rounded-xl shadow-md bg-white text-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          <b className="text-lg">Comodidad:</b>
          <p>
            Con nuestra interfaz fácil de usar y proceso de compra sin complicaciones, nunca ha sido tan fácil realizar tus compras.
          </p>
        </div>
        <div className="border px-8 py-12 flex flex-col gap-5 rounded-xl shadow-md bg-white text-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          <b className="text-lg">Servicio al Cliente Excepcional:</b>
          <p>
            Nuestro equipo de profesionales dedicados está aquí para asistirte en todo lo que necesites, asegurando que tu satisfacción sea nuestra máxima prioridad.
          </p>
        </div>
      </div>

      {/* Caja de Newsletter */}
      <NewsletterBox />

    </div>
  )
}

export default About
