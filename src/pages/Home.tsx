import React from 'react';
import ProductCard from '../components/ProductCard';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 30, image: '/images/product3.jpg' },
    { id: 4, name: 'Product 4', price: 40, image: '/images/product4.jpg' },
];

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="bg-orange-500 text-white text-center p-10 text-3xl">
                Welcome to Shopee Clone
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
