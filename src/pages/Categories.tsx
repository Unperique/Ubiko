import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/api';
import { Category } from '../types/category';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) return <div className="container mx-auto px-4 py-8">Cargando categorías...</div>;
  if (error) return <div className="container mx-auto px-4 py-8">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Categorías</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">{category.name}</h2>
            {category.icon && <span className="text-2xl">{category.icon}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;