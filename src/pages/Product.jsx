import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("")
  const [image, setImage] = useState("")

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item.id === parseInt(productId));
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    } else {
      console.error(`Producto con id ${productId} no encontrado.`);
      // Redirigir al usuario o mostrar un mensaje de error
    }
  };
  

  useEffect(() => {
    fetchProductData()
  }, [productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>  {/* -------- Product Row ---------- */}

        {/* -------- Product Images ---------- */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (<img key={index} onClick={() => setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} alt="" />))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}

        <div className='flex-1'>

          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Seleccionar tamaño</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (<button key={index} onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}>{item}</button>))}
            </div>
          </div>
          <button onClick={() => addToCart(productData.id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>AGREGAR AL CARRITO</button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Producto 100% Original.</p>
            <p>El pago contra reembolso está disponible para este producto.</p>
            <p>Política de devolución y cambio sencilla en un plazo de 7 días.</p>
          </div>
        </div>


      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Descripcion</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>Un sitio web de comercio electrónico es una plataforma en línea que facilita la compra y venta de productos o servicios a través de internet. Sirve como un mercado virtual donde las empresas e individuos pueden exhibir sus productos, interactuar con los clientes y realizar transacciones sin necesidad de presencia física. Los sitios web de comercio electrónico han ganado una gran popularidad debido a su conveniencia, accesibilidad y el alcance global que ofrecen.</p>
        <p>Los sitios web de comercio electrónico suelen mostrar productos o servicios junto con descripciones detalladas, imágenes, precios y cualquier variación disponible (por ejemplo, tamaños, colores). Cada producto generalmente tiene su propia página dedicada con la información relevante.</p>

        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product
