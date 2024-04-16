import Image from 'next/image';

export const Background = () => {
    return (
        <Image
            src='/background.png'
            alt='sala de espera de hospital'
            width={1440}
            height={300}
            priority={true}
        />
    )
}
