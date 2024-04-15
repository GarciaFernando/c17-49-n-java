import Image from 'next/image'
import ImageProfile from '../../../public/imageProfile/avatar.png'

interface Props {
    imagen: string;
    height: number;
    width: number;
}

export const ImagenAvatar = ({ imagen, height, width }: Props) => {
    return (
        <Image
            src={ImageProfile}
            alt='imagen avatar'
            className='rounded-full'
            style={{
                objectFit: 'cover',
                width: width,
                height: height
            }}
        />
    )
}
