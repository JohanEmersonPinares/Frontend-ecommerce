import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PropTypes from 'prop-types';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Asegúrate de que esta variable está configurada correctamente en tu .env
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    // Función para agregar productos al carrito
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        if (!itemId) {
            toast.error('Product ID is missing');
            return;
        }

        if (!token) {
            toast.error("You need to log in to add products to the cart.");
            return;
        }

        const userId = localStorage.getItem('userId'); // Suponiendo que se guarda en localStorage

        if (!userId) {
            toast.error("User ID is missing. Please log in again.");
            return;
        }

        try {
            const response = await axios.post(
                `${backendUrl}/api/cart/add`,
                { userId, itemId, size, quantity: 1 }, // Incluye userId
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.status === 200) {
                toast.success('Product added to cart!');
            } else {
                toast.error('Error: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            if (error.response) {
                toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`);
            } else {
                toast.error('Network error. Please try again later.');
            }
        }
    };



    // Función para obtener el total de productos en el carrito
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            }
        }
        return totalCount;
    };

    // Función para actualizar la cantidad de productos en el carrito
    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, {
                    headers: { Authorization: `Bearer ${token}` } // Asegúrate de pasar el token con 'Bearer'
                });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // Función para obtener el monto total del carrito
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product.id === itemId);
            if (itemInfo) {
                for (const size in cartItems[itemId]) {
                    if (cartItems[itemId][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[itemId][size];
                    }
                }
            }
        }
        return totalAmount;
    };

    // Función para obtener los productos disponibles
    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.success) {
                console.log("Productos cargados:", response.data.products); // Verifica los datos
                setProducts(response.data.products.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error al cargar productos:", error);
            toast.error(error.message);
        }
    };

    // Función para obtener los datos del carrito del usuario
    const getUserCart = async (token) => {
        if (!token) {
            console.error("No token found, please login.");
            return;
        }

        try {
            const response = await axios.post(`${backendUrl}/api/cart/get`, {}, {
                headers: { Authorization: `Bearer ${token}` } // Asegúrate de pasar el token con 'Bearer'
            });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            } else {
                console.warn("Failed to load user cart:", response.data.message);
            }
        } catch (error) {
            console.error("Failed to load user cart:", error.message);
        }
    };


    // useEffect para obtener los productos una sola vez
    useEffect(() => {
        getProductsData();
    }, []); // getProductsData se ejecuta solo una vez al montar el componente

    // useEffect para manejar el token y cargar el carrito
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken && !token) {
            setToken(storedToken);
            getUserCart(storedToken); // Llama a la función con el token almacenado
        }

        if (token) {
            getUserCart(token); // Si ya tienes el token, carga el carrito
        }
    }, [token]); // Solo el token es necesario como dependencia

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

// Añadido PropTypes para validación de los props
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
