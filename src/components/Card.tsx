// components/Card.tsx
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, link }) => {
    return (

        <>
            <Link href={link}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg border-slate-300 border m-4 min-h-[300px]">
                    <Image className="w-full" src={imageSrc} alt={title} width={500} height={300} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-400 text-base">{description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card;
