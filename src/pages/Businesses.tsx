import React, { useEffect, useState } from 'react';
import BusinessList from '../components/business/BusinessList';
import { fetchBusinesses } from '../services/api';
import { Business } from '../types/business';

const Businesses: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBusinesses = async () => {
      try {
        const data = await fetchBusinesses();
        setBusinesses(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    getBusinesses();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Puntos de venta</h1>
      {loading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <BusinessList businesses={businesses} />
      )}
    </div>
  );
};

export default Businesses;