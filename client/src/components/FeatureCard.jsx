import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-indigo-600">
                {icon}
            </div>
            <h4 className="text-xl font-bold text-gray-800">{title}</h4>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
};

export default FeatureCard;
