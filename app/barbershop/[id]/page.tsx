import BarbershopService from "@/app/_components/BarbershopService";
import PhoneItem from "@/app/_components/PhoneItem";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPin, MapPinCheckIcon, MenuIcon, SmartphoneIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopProps {
    params : {
        id: string
    }
}

const BarbershopPage = async ({ params } : BarbershopProps) => {

    const barbershop = await db.barberShop.findUnique({
        where: { id: params.id},
        include:{
            services: true
        }
    })

    if(!barbershop){
        notFound()
    }

    return ( 
        <div>

            {/* IMAGEM */}
            <div className="relative min-h-[210px] max-h-[210px] min-w-full max-w-full">
                <Image alt={barbershop.name} src={barbershop.imageUrl} className="object-cover" fill/>

                <Button size="icon-lg" variant="secondary" className="absolute top-4 left-4">
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Button size="icon-lg" variant="secondary" className="absolute top-4 right-4">
                    <Link href="/">
                        <MenuIcon />
                    </Link>
                </Button>
            </div>

            {/* CONTEÚDO */}
            <div className="space-y-2 border-b border-solid p-5">
                <h2 className="font-bold text-2xl">{barbershop.name}</h2>
                <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-primary"/>
                    <p className="text-lg text-gray-300">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-2">
                    <StarIcon size={20} className="text-primary fill-primary"/>
                    <p className="text-lg text-gray-300">5.0 (889 avaliações)</p>
                </div>
            </div>

            {/* SOBRE NÓS */}
            <div className="p-5 space-y-3 border-b border-solid">
                <h2 className="text-xs font-bold text-gray-400 line-clamp-3 mt-3 mb-2">SOBRE NÓS</h2>
                <p className="text-justify text-sm">{barbershop.description}</p>
            </div>

            {/* SERVIÇOS */}
            <div className="flex flex-col gap-3 p-5 border-b border-solid mb-3">
                {barbershop.services.map(service => (
                    <BarbershopService key={service.id} service={service}/>
                ))}
            </div>

            {/* CONTATO */}
            <div className="p-5">
                <h2 className="text-xs font-bold text-gray-400 line-clamp-3 mt-3 mb-2">CONTATO</h2>
                <div className="flex flex-col gap-3">
                    {barbershop.phones.map(phone => <PhoneItem key={phone} phone={phone}/>)}
                </div>
            </div>
        </div>
    );
}
 
export default BarbershopPage;