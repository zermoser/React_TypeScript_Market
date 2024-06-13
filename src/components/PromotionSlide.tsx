import React from 'react';
import { Carousel } from 'flowbite-react';
import PromotionCard from './PromotionCard';

interface Promotion {
    id: number;
    image: string;
    link: string;
}

interface PromotionSlideProps {
    promotions: Promotion[];
}

const PromotionSlide: React.FC<PromotionSlideProps> = ({ promotions }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-4 bg-black rounded-md shadow-md">
            <div className="w-full lg:w-2/3 flex justify-center items-center">
                <div className="w-full">
                    <Carousel slideInterval={3000} className="rounded-md">
                        {promotions.map(promotion => (
                            <a href={promotion.link} key={promotion.id}>
                                <img
                                    src={promotion.image}
                                    alt={`Promotion ${promotion.id}`}
                                    className="w-full h-auto lg:h-80 object-cover"
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col p-4 lg:p-6 space-y-4">
                {promotions.map(promotion => (
                    <PromotionCard key={promotion.id} promotion={promotion} />
                ))}
            </div>
        </div>
    );
};

export default PromotionSlide;
