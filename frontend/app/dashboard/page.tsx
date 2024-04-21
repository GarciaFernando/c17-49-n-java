import { Calendario } from '@/components/Calendario';
import {especialidades} from '@/mocks/especialidad.json'


export default function Dashboard() {
    const doctores = especialidades[0].doctores;

    interface Especialidad {
      nombre: string;
      abreviacion: string;
    }



  return (
    <>
    <div className="p-1">
      <h1 className="font-bold text-lg text-center">Especialidades</h1>
      <div className=" flex flex-wrap gap-2 justify-center">
        {especialidades.map((especialidad: Especialidad) => (
          <h1 className="bg-gray-300 px-3 py-2 cursor-pointer">
            {especialidad.nombre}
          </h1>
        ))}
      </div>
      <div className="mt-4">
        <Calendario />
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <h1 className="font-bold text-lg text-center">
          Profesionales Disponibles
        </h1>
        {doctores?.map((doctor: any) => (
          <div className="p-1">
            <div className="grid grid-cols-[auto_250px_minmax(0,1fr)] gap-2 justify-center shadow-[0_0_5px] shadow-gray-400 p-2">
              <img
                width={50}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
              />
              <div className=" leading-none flex flex-col ">
                <h1 className="font-bold text-md">{doctor.nombre}</h1>
                <p className="text-sm">Descripcion</p>
              </div>
              <div className=" flex gap-3 justify-end items-center">
                <div className=" leading-3  ">
                  <h1 className="text-center text-sm">Precio</h1>
                  <h1 className="text-xl font-extrabold">${doctor.precio}</h1>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-sm">Calificacion</h1>
                  <div className="flex ">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                </div>
                <button className="bg-mlt-600 hover:bg-mlt-800 text-white px-[10px] py-1 rounded-xl">
                  Reservar cita
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}
