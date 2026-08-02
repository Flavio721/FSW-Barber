import Image from "next/image";
import { BarberShopServices } from "../generated/prisma/client";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface ServiceItemProps {
    service: BarberShopServices
}

const BarbershopService = ({ service } : ServiceItemProps) => {
    return ( 
        <Card>
            <CardContent className="flex items-center gap-3 p-3">
                {/* IMAGEM */}
                <div className="relative min-h-[110px] max-h-[110px] min-w-[110px] max-w-[110px]">
                    <Image alt={service.name} src={service.imageUrl} fill className="object-cover rounded-xl"/>
                </div>

                {/* CONTEÚDO */}
                <div className="flex flex-col justify-between min-h-[110px] min-w-0 flex-1">
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold">{service.name}</h3>
                        <p className="text-sm text-gray-400 line-clamp-2">{service.description}</p>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-primary">{Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(service.price))}</p>
                            <Button variant={"secondary"} size="lg">Reservar</Button>
                        </div>
                    </div>
                </div>
        </CardContent>
        </Card>
     );
}
export default BarbershopService;