import Image from "next/image"
import { ImagenAvatar } from "./ImagenAvatar"
import Link from "next/link"

export const Navbar = () => {
    return (
        <>
            <header>
                <Image
                    src='/medilatam.svg'
                    alt="logo de la aplicación web"
                    height={150}
                    width={500}
                />
            </header>
            <div className="flex flex-col gap-4 items-center">
                <ImagenAvatar imagen={'/imageProfile/avatar.png'} width={150} height={150} />
                <div className="flex justify-between">
                    <button type="button" className="text-white bg-mlt-600 hover:bg-mlt-800  focus:outline-none font-medium rounded-full text-sm px-8 py-1 text-center me-10 mb-2">Login</button>
                    <button type="button" className="text-white bg-mlt-600 hover:bg-mlt-800 focus:outline-none font-medium rounded-full text-sm px-6 py-1 text-center me-2 mb-2">Registro</button>
                </div>
            </div>
            <nav className="flex flex-col gap-2 items-center text-2xl">
                <Link className="flex h-[48px] grow items-center gap-2 rounded-md bg-gray-5 text-sm font-medium hover:bg-mlt-600 hover:text-mlt-100 flex-none justify-star px-16" href="#">Reserva de turnos</Link>
                <Link className="flex h-[48px] grow items-center gap-2 rounded-md bg-gray-5 text-sm font-medium hover:bg-mlt-600 hover:text-mlt-100 flex-none justify-star px-20" href="#">Mis consultas</Link>
                <Link className="flex h-[48px] grow items-center gap-2 rounded-md bg-gray-5 text-sm font-medium hover:bg-mlt-600 hover:text-mlt-100 flex-none justify-star px-[110px]" href="#">Perfil</Link>
                <Link className="flex h-[48px] grow items-center gap-2 rounded-md text-sm font-medium hover:bg-mlt-600 hover:text-mlt-100 flex-none justify-star px-[75px]" href="#">Atención virtual</Link>
            </nav >

        </>
    )
}
