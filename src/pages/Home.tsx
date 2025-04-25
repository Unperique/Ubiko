import React from 'react';
import { Autoplay } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/autoplay'; 

const Home = () => {
  return (

      <main>
        {/* Sección de actividades con disposición 3x2 */}
        <section className="mb-12 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">¿Qué necesitas hacer el día de hoy?</h2>
          <div className="max-w-2xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* Primera fila - 3 elementos */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md p-2 hover:shadow-md transition-shadow aspect-square flex items-center justify-center">
                  <img 
                    src="/api/placeholder/150/150" 
                    alt="Actividad diaria" 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Segunda fila - 3 elementos */}
              {[4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md p-2 hover:shadow-md transition-shadow aspect-square flex items-center justify-center">
                  <img 
                    src="/api/placeholder/150/150" 
                    alt="Actividad diaria" 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comercios Destacados - Con título centrado y scroll infinito */}
        <section className="py-8 px-4 md:px-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Comercios Destacados</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Carrusel con scroll infinito */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                }
              }}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={5000} // Velocidad del desplazamiento continuo
              loop={true} // Habilita el loop infinito
              className="py-4"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <SwiperSlide key={item}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <img
                      src="/api/placeholder/400/300"
                      alt={`Comercio ${item}`}
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
  );
};

export default Home;