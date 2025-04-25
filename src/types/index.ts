// src/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  location: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}