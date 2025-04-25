import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../ui/button";
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow flex justify-between items-center px-8 py-4">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Ubiko
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/businesses" className="hover:text-primary">
            Negocios
          </Link>
          <Link to="/categories" className="hover:text-primary">
            Categorías
          </Link>
          {user ? (
            <Link to="/profile">
              <Button variant="ghost">Mi Perfil</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button>Iniciar Sesión</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;