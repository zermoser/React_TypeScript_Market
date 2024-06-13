import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Promotion {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

interface PromotionSlideProps {
    promotions: Promotion[];
}

const PromotionSlide: React.FC<PromotionSlideProps> = ({ promotions }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {promotions.map(promotion => (
                <div key={promotion.id} className="p-4">
                    <div className="flex flex-col items-center bg-white shadow-md rounded-md">
                        <img src={promotion.image} alt={promotion.title} className="w-full h-48 object-cover mb-4 rounded" />
                        <h3 className="text-lg font-bold">{promotion.title}</h3>
                        <p className="text-gray-700">{promotion.description}</p>
                        <a href={promotion.link} className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                            Learn More
                        </a>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default PromotionSlide;
