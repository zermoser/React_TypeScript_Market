import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border p-4 flex flex-col items-center bg-white shadow-md rounded-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
