import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-orange-500 p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">Shopee Clone</div>
            <div className="flex-1 mx-4">
                <input
                    type="text"
                    placeholder="Search for products"
                    className="w-full p-2 rounded"
                />
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white">Home</a></li>
                    <li><a href="#" className="text-white">Categories</a></li>
                    <li><a href="#" className="text-white">Cart</a></li>
                    <li><a href="#" className="text-white">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
