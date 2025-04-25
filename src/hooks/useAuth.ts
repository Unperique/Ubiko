import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    fetchUser();
  }, []);

  type LoginCredentials = {
    email: string;
    password: string;
  };

  const login = (credentials: LoginCredentials) => {
    // tu lógica de login aquí
    // ejemplo:
    // setUser({ name: 'Usuario', email: credentials.email });
    // localStorage.setItem('user', JSON.stringify({ name: 'Usuario', email: credentials.email }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, login, logout };
};

export default useAuth;