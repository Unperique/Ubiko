import React from 'react';
import useAuth from '../hooks/useAuth';
import Button from '../components/ui/button';

type User = {
  name: string;
  email: string;
  // otros campos si los tienes
};

const Profile = () => {
  const { user, logout } = useAuth() as { user: User | null; logout: () => void };

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Mi Perfil</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold">Información del Usuario</h2>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <Button onClick={logout} variant="ghost">Cerrar Sesión</Button>
      </div>
    </div>
  );
};

export default Profile;