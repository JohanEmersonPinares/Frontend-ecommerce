import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {

        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))

    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"MAS"} text2={"VENDIDAS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> Descubre nuestras prendas más vendidas, elegidas por nuestros clientes por su estilo, comodidad y calidad. ¡No te pierdas lo mejor de nuestra tienda</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
