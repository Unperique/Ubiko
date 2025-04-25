import React, { useEffect, useState } from 'react';
import { Business } from '../../types/business';
import BusinessCard from './BusinessCard';

interface BusinessListProps {
  businesses: Business[];
}

const BusinessList: React.FC<BusinessListProps> = ({ businesses }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  try {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {businesses.map((business: Business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    );
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An unknown error occurred');
    return <div>Error: {error}</div>;
  }
};

export default BusinessList;