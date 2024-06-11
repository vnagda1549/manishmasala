import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ProductsPage.css';

const products = [
    {
        id: 1,
        name: 'Aachar Sambhar Masala',
        image: '/images/acharsambhar.jpg',
        price: '$10',
        description: 'Achar Sambhar Masala is a vibrant and aromatic spice blend, essential for adding depth and complexity to pickles and sambhars. This versatile mix brings the authentic taste of Indian cuisine to your dishes, enhancing their flavor with a perfect balance of spices.'
    },
    {
        id: 2,
        name: 'Aagri Masala',
        image: '/images/agrimasala.jpg',
        price: '$5',
        description: 'Aagri Masala is a traditional spice blend originating from the Agri community of Maharashtra, India. Known for its bold and fiery flavors, this masala is a staple in Aagri cuisine, imparting a unique and robust taste to a variety of dishes. It is perfect for those who love to add a spicy kick to their meals.'
    },
    {
        id: 3,
        name: 'Aamchur Powder',
        image: '/images/aamchurpowder.jpg',
        price: '$7',
        description: 'Aamchur Powder, also known as Amchoor or Mango Powder, is a tangy and flavorful spice made from dried green mangoes. This powder is a staple in Indian cuisine, known for adding a burst of tanginess and a fruity undertone to a variety of dishes. It is a versatile ingredient that enhances the flavor profile of both savory and sweet recipes.'
    },
    {
        id: 4,
        name: 'Black Pepper Powder',
        image: '/images/blackpepper.jpg',
        price: '$10',
        description: 'Black Pepper Powder, often referred to as the "king of spices," is a finely ground form of black peppercorns. Known for its sharp and pungent flavor, black pepper is a staple in kitchens worldwide. It enhances the taste of dishes with its distinct spicy kick and subtle heat, making it a versatile and essential ingredient in both culinary and medicinal contexts.'
    },
    {
        id: 5,
        name: 'Chilli Powder',
        image: '/images/chillipowder.jpg',
        price: '$5',
        description: 'Chilli Powder is a vibrant and fiery spice made from dried and ground red chilies. It is a cornerstone in various cuisines around the world, particularly known for adding heat, color, and depth to dishes. This versatile spice can vary in heat levels, ranging from mild to extremely hot, and is an essential ingredient for those who love a spicy kick in their food.'
    },
    {
        id: 6,
        name: 'Garam Masala',
        image: '/images/garammasala.jpg',
        price: '$7',
        description: 'Garam Masala is a traditional Indian spice blend known for its warm, aromatic, and complex flavors. The term "garam masala" translates to "warm spices," reflecting the warming nature of this blend. It is a versatile seasoning used to enhance the flavor of a wide variety of dishes, from curries and soups to marinades and roasted vegetables.'
    },,
    {
        id: 7,
        name: 'Turmeric Powder',
        image: '/images/turmericpowder.jpg',
        price: '$5',
        description: 'Turmeric Powder, derived from the dried and ground root of the Curcuma longa plant, is a vibrant yellow-orange spice commonly used in Indian and Southeast Asian cuisines. Known for its earthy, slightly bitter flavor and strong coloring properties, turmeric is a staple in many spice blends and dishes. Beyond its culinary uses, turmeric is also revered for its medicinal properties and is a key ingredient in traditional Ayurvedic medicine.'
    },
    {
        id: 3,
        name: 'Malavani Masala',
        image: '/images/malavanimasala.jpg',
        price: '$7',
        description: 'Malvani Masala is a traditional spice blend from the coastal Malvan region of Maharashtra, India. Known for its bold, spicy, and aromatic flavors, Malvani Masala is a key ingredient in the regions cuisine, which features a mix of coconut, spices, and seafood. This masala is perfect for adding depth and complexity to a variety of dishes, making it a staple for those who love robust and fiery flavors.'
    }
];

function ProductsPage() {
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <Navbar />
            <Header />
            <main>
            <h2 className="products-heading">Our Products - Our Legacy</h2>
            <div className="products-container">
                    {products.map(product => (
                        <div 
                            key={product.id} 
                            className="product-card" 
                            onClick={() => handleProductClick(product.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProductsPage;
