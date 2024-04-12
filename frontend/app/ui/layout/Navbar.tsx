import Image from "next/image"
import { ImagenAvatar } from "./ImagenAvatar"
import Link from "next/link"

const links=[
    { name: 'Reserva de turnos', href: '#', icon: "calendar.svg" },
    { name: 'Mis consultas', href: '#', icon: "nota.svg" },
    { name: 'Perfil', href: '#', icon: "user.svg" },
    { name: 'Atención virtual', href: '#', icon: "celular.svg" },
]

export const Navbar = () => {
    return (
        <>
            <header>
                <Image
                    src='/Medilatam.svg'
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
            <nav className="flex flex-col grow space-x-0 space-y-2 w-full">
            {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-start gap-2 rounded-md p-3 text-sm font-medium hover:bg-mlt-600 hover:text-mlt-100"
          >
            <Image src={`/icon/${LinkIcon}`} alt={LinkIcon} className="w-6" width={32} height={32}/>
            <p className="hidden md:block">{link.name}</p>
          </Link >
        );
      })} 
    </nav >
</>
    )
}
