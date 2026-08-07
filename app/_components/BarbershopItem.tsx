import Image from "next/image";
import { BarberShop } from "../generated/prisma/client";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface BarbershopItemProps {
    barbershop: BarberShop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <Link href={`/barbershop/${barbershop.id}`}>
            <Card className="p-1 min-w-[150px]">
                <CardContent>
                    <div className="relative h-[150px]">
                        <Image
                            alt={barbershop.name}
                            src={barbershop.imageUrl}
                            fill
                            className="object-cover rounded-xl"
                        />
                        <Badge variant={"secondary"} className="absolute top-2 left-2 rounded-xl space-x-1">
                            <StarIcon size={12} className="fill-primary text-primary" />
                            <p className="font-semibold text-xs">5.0</p>
                        </Badge>
                    </div>
                    <div className="px-1 py-3 space-y-1">
                        <h3 className="font-semibold mt-3 truncate">{barbershop.name}</h3>
                        <p className="text-gray-500 truncate">{barbershop.address}</p>
                        <Button variant={"secondary"} className="w-full">
                            Reservar
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export default BarbershopItem;