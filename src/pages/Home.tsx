import React from 'react';
import ProductCard from '../components/ProductCard';
import PromotionSlide from '../components/PromotionSlide';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface Promotion {
    id: number;
    image: string;
    link: string;
}

const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://ngthai.com/app/uploads/2023/05/%E0%B9%81%E0%B8%A1%E0%B8%A7.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://ngthai.com/app/uploads/2023/05/%E0%B9%81%E0%B8%A1%E0%B8%A7.jpg' },
    { id: 3, name: 'Product 3', price: 30, image: 'https://ngthai.com/app/uploads/2023/05/%E0%B9%81%E0%B8%A1%E0%B8%A7.jpg' },
    { id: 4, name: 'Product 4', price: 40, image: 'https://ngthai.com/app/uploads/2023/05/%E0%B9%81%E0%B8%A1%E0%B8%A7.jpg' },
];

const promotions: Promotion[] = [
    { id: 1, image: 'https://ngthai.com/app/uploads/2023/05/%E0%B9%81%E0%B8%A1%E0%B8%A7.jpg', link: '#' },
    { id: 2, image: 'https://ngthai.com/app/uploads/2023/05/%E0%B9%81%E0%B8%A1%E0%B8%A7.jpg', link: '#' },
];

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="bg-orange-500 text-white text-center p-10 text-3xl">
                Welcome to Shopee Clone
            </div>
            <div className="p-6 bg-gray-100">
                <PromotionSlide promotions={promotions} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
