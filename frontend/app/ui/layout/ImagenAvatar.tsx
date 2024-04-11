import Image from 'next/image'


interface Props {
    imagen: string;
    height: number;
    width: number;
}

export const ImagenAvatar = ({ imagen, height, width }: Props) => {
    console.log(imagen)
    return (
        <Image
            src={imagen}
            alt='imagen avatar'
            className="rounded-full"
            height={height}
            width={width}
        />
    )
}
