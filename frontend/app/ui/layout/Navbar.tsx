import Image from "next/image"
import { ImagenAvatar } from "./ImagenAvatar"
import Link from "next/link"
import { BotonPrincipal } from "./BotonPrincipal"
import { CalendarDaysIcon, DevicePhoneMobileIcon, UserCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';



const links = [
    { name: 'Reserva de turnos', href: '#', icon: CalendarDaysIcon },
    { name: 'Mis consultas', href: '#', icon: DocumentTextIcon },
    { name: 'Perfil', href: '#', icon: UserCircleIcon },
    { name: 'Atención virtual', href: '#', icon: DevicePhoneMobileIcon },
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
            <div className="flex flex-col space-y-2 items-center mt-4">
                <ImagenAvatar imagen={'/imageProfile/avatar.png'} width={150} height={150} />
                <div className="flex space-x-10 pb-4  border-b-2">
                    <BotonPrincipal name={"Login"} />
                    <BotonPrincipal name={"Registro"} />
                </div>
            </div>
            <nav className="flex flex-col grow space-x-0 space-y-3 w-full mt-2">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex h-[48px] grow items-center justify-start gap-2 rounded-md p-3 text-sm font-medium hover:bg-mlt-600 group hover:text-white"
                        >
                            <LinkIcon className="w-6" />
                            <p>{link.name}</p>
                        </Link >
                    );
                })}
            </nav >
        </>
    )
}
