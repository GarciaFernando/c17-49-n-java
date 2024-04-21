import Image from "next/image";
import Link from "next/link";
import { especialidades } from "../../../mocks/especialidad.json";


export default function misConsultas() {
  const doctores = especialidades[0].doctores;

  return (
    <>
      <div>
        <section className="container px-4 mx-auto mt-2">
          <h1 className="font-bold text-lg text-center mb-2">
            Consultas pendientes
          </h1>
          <div className="flex flex-col gap-2">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-300 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-300">
                    <thead className="bg-mlt-600">
                      <tr>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                          Especialidad
                        </th>

                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                          Médico
                        </th>

                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                          Fecha
                        </th>

                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                          Hora
                        </th>

                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                          Tipo de consulta
                        </th>

                        <th className="relative py-3.5 px-4">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>

                    {doctores?.map((doctor: any) => (
                      <tbody className="bg-gray-200">
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-black whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <span>{especialidades[0].nombre}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex flex-cols items-center gap-x-2">
                              <Image
                                className="object-cover w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt="imagen"
                                width={50}
                                height={50}
                              />
                              <div>
                                <h2 className="text-sm font-medium text-gray-800 dark:text-black ">
                                  {doctor.nombre}
                                </h2>
                                {/* <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                            authurmelo@example.com
                          </p> */}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-black dark:text-black whitespace-nowrap">
                            Jan 6, 2022
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center text-mlt-600 ">
                              <h2 className="text-sm font-normal">00:00hrs</h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-black ">
                            Virtual/Presencial
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <Link
                              href='dashboard/atencionVirtual' 
                              className="text-mlt-600 transition-colors duration-200 dark:hover:text-mlt-800 dark:text-mlt-600 hover:text-mlt-800 focus:outline-none">
                                Ingresar
                              </Link>
                               <button
                               className="bg-mlt-600 hover:bg-mlt-800 text-white px-[10px] py-1 rounded-xl">
                                Cancelar cita
                               </button>                              
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
