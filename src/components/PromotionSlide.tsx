import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
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
        <div className="flex flex-col lg:flex-row lg:space-x-4 bg-white rounded-md shadow-md">
            <div className="w-full lg:w-2/3 flex justify-center items-center">
                <div className="flex justify-center items-center h-[400px] bg-slate-700">
                    <Splide
                        options={{
                            type: 'fade',
                            autoplay: true,
                            interval: 3000,
                            rewind: true, // Option to rewind the slides (loop)
                            pauseOnHover: false, // Option to prevent pausing on hover
                            lazyLoad: 'nearby',
                        }}
                        className="splide rounded-md"
                    >
                        {promotions.map(promotion => (
                            <SplideSlide key={promotion.id}>
                                <a href={promotion.link}>
                                    <img
                                        src={promotion.image}
                                        alt={`Promotion ${promotion.id}`}
                                        className="w-full h-auto lg:h-80 object-cover"
                                    />
                                </a>
                            </SplideSlide>
                        ))}
                    </Splide>
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
