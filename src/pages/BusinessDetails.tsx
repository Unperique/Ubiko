import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBusinessById } from '../services/api';
import { Business } from '../types/business';

const BusinessDetails = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBusiness = async () => {
      try {
        if (!id) return;
        const data = await fetchBusinessById(id);
        setBusiness(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar el negocio');
      } finally {
        setLoading(false);
      }
    };

    loadBusiness();
  }, [id]);

  if (loading) return <div className="container mx-auto px-4 py-8">Cargando...</div>;
  if (error) return <div className="container mx-auto px-4 py-8 text-red-500">Error: {error}</div>;
  if (!business) return <div className="container mx-auto px-4 py-8">No se encontró el negocio</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{business.name}</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-600 mb-4">{business.description}</p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Categoría</h2>
          <p>{business.category}</p>
        </div>
        {/* Add more business details here */}
      </div>
    </div>
  );
};

export default BusinessDetails;