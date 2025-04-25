import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Ubiko. Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="/terminos" className="hover:text-primary">Términos de Servicio</a>
          <a href="/privacidad" className="hover:text-primary">Política de Privacidad</a>
          <a href="/contacto" className="hover:text-primary">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;