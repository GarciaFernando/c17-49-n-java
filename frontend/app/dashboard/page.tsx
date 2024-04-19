import { Calendario } from '@/app/ui/Calendario';
import { especialidades } from '@/mocks/especialidad.json';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Accessibility = dynamic(
  () => {
    return import('@/app/ui/layout/Accesibility');
  },
  { ssr: false }
);
export default async function Dashboard() {
  const doctores = especialidades[0].doctores;
  interface Especialidad {
    nombre: string;
    abreviacion: string;
  }
  return (
    <>
      <Accessibility />;
      <div className="p-1 mx-auto md:-mt-56 w-full max-w-6xl h-full -space-y-12">
        <section className="bg-white rounded-xl shadow-2xl py-2">
          <h1 className="font-bold text-lg text-center border-b-2 pt-2 mb-2 mx-2">
            Especialidades
          </h1>
          <div className=" flex flex-wrap gap-2 justify-center">
            {especialidades.map((especialidad: Especialidad) => (
              <a
                className="text-white bg-mlt-600 hover:bg-mlt-800 hover:scale-105 duration-300 transition-colors focus:outline-none font-semibold rounded-full text-xs text-center py-3  w-32 cursor-pointer"
                key={especialidad.nombre}>
                {especialidad.nombre}
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-col justify-center rounded-xl p-2 h-[350px]">
          <Calendario />
        </section>
        <div className="rounded-xl bg-white pb-10">
          <h1 className="font-bold text-lg text-center border-b-2 pt-2 mb-2">
            Profesionales Disponibles
          </h1>
        </div>
        <section className="bg-white shadow-2xl rounded-2xl flex flex-col justify-start gap-1 h-48 px-2 overflow-y-scroll scroll-container">
          {doctores?.map((doctor: any) => (
            <div className="p-1" key={doctor.nombre}>
              <div className="grid grid-cols-[auto_250px_minmax(0,1fr)] gap-1 justify-center shadow-[0_0_5px] shadow-gray-400 p-2 rounded-xl">
                <Image
                  width={50}
                  height={50}
                  src="/imageProfile/avatarGrid.webp"
                  alt="avatar"
                  className="md:size[50px] size-10"
                />
                <div className=" leading-none flex flex-col">
                  <h1 className="font-bold text-sm">{doctor.nombre}</h1>
                  <p className="text-xs">Descripción</p>
                </div>
                <div className=" flex gap-3 justify-end items-center">
                  <div className=" leading-3  ">
                    <h1 className="text-center text-sm">Precio</h1>
                    <h1 className="text-sm font-extrabold">${doctor.precio}</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-sm">Calificación</h1>
                    <div className="flex ">
                      <svg
                        className="w-5 h-5 text-yellow-300 md:flex"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-300 hidden md:flex"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-300 hidden md:flex"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-300 hidden md:flex"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-300 hidden md:flex"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200">
                        5.0
                      </span>
                    </div>
                  </div>
                  <button className="text-white bg-mlt-600 hover:bg-mlt-800 hover:scale-105 duration-300  transition-colors focus:outline-none font-semibold md:font-medium rounded-xl md:rounded-full text-xs md:text-sm text-center px-1 w-[75px] h-[40px] md:mx-2 md:h-10">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
