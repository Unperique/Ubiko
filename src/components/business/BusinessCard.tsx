import React from 'react';
import { Link } from 'react-router-dom';
import { Business } from '../../types/business';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <Link to={`/businesses/${business.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
        <h2 className="text-xl font-semibold mb-2">{business.name}</h2>
        <p className="text-gray-600">{business.description}</p>
        <span className="inline-block mt-2 text-sm text-gray-500">
          {business.category}
        </span>
      </div>
    </Link>
  );
};

export default BusinessCard;