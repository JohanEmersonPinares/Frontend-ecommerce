import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, navigate, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // Actualizar `cartData` cuando cambien `cartItems` o `products`
  useEffect(() => {
    if (products.length > 0 && Object.keys(cartItems).length > 0) {
      const tempData = [];

      Object.entries(cartItems).forEach(([itemId, sizes]) => {
        Object.entries(sizes).forEach(([size, quantity]) => {
          if (quantity > 0) {
            const productData = products.find((product) => product.id === itemId);
            if (productData) {
              tempData.push({
                id: itemId,
                size,
                quantity,
                productData,
              });
            }
          }
        });
      });

      setCartData(tempData);
    } else {
      setCartData([]); // Limpiar si no hay datos
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'TUS'} text2={'PEDIDOS'} />
      </div>

      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={item.productData.image[0]} alt={item.productData.name} />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{item.productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{item.productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => {
                  const newQuantity = Number(e.target.value);
                  if (newQuantity > 0) {
                    updateQuantity(item.id, item.size, newQuantity); // Actualiza la cantidad
                  }
                }}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                value={item.quantity} // Actualizar el valor con la cantidad actual
              />
              <img
                onClick={() => updateQuantity(item.id, item.size, 0)} // Eliminar el producto
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt="Eliminar"
              />
            </div>
          ))
        ) : (
          <p>No hay productos en tu carrito.</p>
        )}
      </div>

      <div className="flex justify-center my-20">
        <div className="w-full sm:w-[450px] p-6 bg-white rounded-lg shadow-xl">
          {/* Cart Total */}
          <CartTotal />

          <div className="flex justify-center w-full">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-gradient-to-r from-[#FF7F32] to-[#FFB84C] text-white text-sm font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              PASAR A PAGAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
