import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ProductDetails.css'; 

const productData = [
    {
        id: 1,
        name: 'Aachar Sambhar Masala',
        image: '/images/acharsambhar.jpg',
        quantities: {
            '50g': 10,
            '100g': 18,
            '250g': 45,
            '500g': 85,
            '1kg': 160
        },
        description: 'Achar Sambhar Masala is a vibrant and aromatic spice blend, essential for adding depth and complexity to pickles and sambhars. This versatile mix brings the authentic taste of Indian cuisine to your dishes, enhancing their flavor with a perfect balance of spices.'
    },
    {
        id: 2,
        name: 'Aagri Masala',
        image: '/images/agrimasala.jpg',
        quantities: {
            '50g': 5,
            '100g': 9,
            '250g': 22,
            '500g': 42,
            '1kg': 80
        },
        description: 'Aagri Masala is a traditional spice blend originating from the Agri community of Maharashtra, India. Known for its bold and fiery flavors, this masala is a staple in Aagri cuisine, imparting a unique and robust taste to a variety of dishes. It is perfect for those who love to add a spicy kick to their meals.'
    },
    {
        id: 3,
        name: 'Aamchur Powder',
        image: '/images/aamchurpowder.jpg',
        quantities: {
            '50g': 7,
            '100g': 13,
            '250g': 32,
            '500g': 60,
            '1kg': 115
        },
        description: 'Aamchur Powder, also known as Amchoor or Mango Powder, is a tangy and flavorful spice made from dried green mangoes. This powder is a staple in Indian cuisine, known for adding a burst of tanginess and a fruity undertone to a variety of dishes. It is a versatile ingredient that enhances the flavor profile of both savory and sweet recipes.'
    },
    {
        id: 4,
        name: 'Black Pepper Powder',
        image: '/images/blackpepper.jpg',
        quantities: {
            '50g': 10,
            '100g': 18,
            '250g': 45,
            '500g': 85,
            '1kg': 160
        },
        description: 'Black Pepper Powder, often referred to as the "king of spices," is a finely ground form of black peppercorns. Known for its sharp and pungent flavor, black pepper is a staple in kitchens worldwide. It enhances the taste of dishes with its distinct spicy kick and subtle heat, making it a versatile and essential ingredient in both culinary and medicinal contexts.'
    },
    {
        id: 5,
        name: 'Chilli Powder',
        image: '/images/chillipowder.jpg',
        quantities: {
            '50g': 5,
            '100g': 9,
            '250g': 22,
            '500g': 42,
            '1kg': 80
        },
        description: 'Chilli Powder is a vibrant and fiery spice made from dried and ground red chilies. It is a cornerstone in various cuisines around the world, particularly known for adding heat, color, and depth to dishes. This versatile spice can vary in heat levels, ranging from mild to extremely hot, and is an essential ingredient for those who love a spicy kick in their food.'
    },
    {
        id: 6,
        name: 'Garam Masala',
        image: '/images/garammasala.jpg',
        quantities: {
            '50g': 7,
            '100g': 13,
            '250g': 32,
            '500g': 60,
            '1kg': 115
        },
        description: 'Garam Masala is a traditional Indian spice blend known for its warm, aromatic, and complex flavors. The term "garam masala" translates to "warm spices," reflecting the warming nature of this blend. It is a versatile seasoning used to enhance the flavor of a wide variety of dishes, from curries and soups to marinades and roasted vegetables.'
    },
    {
        id: 7,
        name: 'Turmeric Powder',
        image: '/images/turmericpowder.jpg',
        quantities: {
            '50g': 5,
            '100g': 9,
            '250g': 22,
            '500g': 42,
            '1kg': 80
        },
        description: 'Turmeric Powder, derived from the dried and ground root of the Curcuma longa plant, is a vibrant yellow-orange spice commonly used in Indian and Southeast Asian cuisines. Known for its earthy, slightly bitter flavor and strong coloring properties, turmeric is a staple in many spice blends and dishes. Beyond its culinary uses, turmeric is also revered for its medicinal properties and is a key ingredient in traditional Ayurvedic medicine.'
    },
    {
        id: 8,
        name: 'Malavani Masala',
        image: '/images/malavanimasala.jpg',
        quantities: {
            '50g': 7,
            '100g': 13,
            '250g': 32,
            '500g': 60,
            '1kg': 115
        },
        description: 'Malvani Masala is a traditional spice blend from the coastal Malvan region of Maharashtra, India. Known for its bold, spicy, and aromatic flavors, Malvani Masala is a key ingredient in the regions cuisine, which features a mix of coconut, spices, and seafood. This masala is perfect for adding depth and complexity to a variety of dishes, making it a staple for those who love robust and fiery flavors.'
   }
];

function ProductDetails() {
    const { id } = useParams();
    const product = productData.find(p => p.id === parseInt(id));
    const [selectedQuantity, setSelectedQuantity] = useState('50g');
    const [price, setPrice] = useState(product.quantities['50g']);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleQuantityChange = (quantity) => {
        setSelectedQuantity(quantity);
        setPrice(product.quantities[quantity]);
    };

    return (
        <div>
            <Navbar />
            <Header />
            <main className="product-details-container">
                <div className="product-card product-image-card">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-card product-info-card">
                    <h2>{product.name}</h2>
                    <p className="description">{product.description}</p>
                    <p className="price">₹{price.toFixed(2)}</p>
                    <div className="product-quantity">
                        <label className="quantity-label">Available Quantities:</label>
                        <div className="quantity-options">
                            {Object.keys(product.quantities).map(quantity => (
                                <div 
                                    key={quantity} 
                                    className={`quantity-option ${selectedQuantity === quantity ? 'selected' : ''}`} 
                                    onClick={() => handleQuantityChange(quantity)}
                                >
                                    {quantity}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProductDetails;