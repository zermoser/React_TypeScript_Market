import React from 'react';

interface PromotionCardProps {
    promotion: {
        image: string;
        link: string;
    };
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={promotion.image} className="w-full h-40 lg:h-48 object-cover rounded" />
        </div>
    );
};

export default PromotionCard;
