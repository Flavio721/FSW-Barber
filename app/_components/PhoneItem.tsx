"use client"

import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "@/components/ui/toast";
import { title } from "process";

interface PhoneProps{
    phone: string
}

const PhoneItem = ({ phone } : PhoneProps) => {

    const handleCopyPhoneClick = (phone : string) => {
        navigator.clipboard.writeText(phone)
        toast.add({
            title: "Telefone copiado",
            description: "Telefone da barbearia copiado com sucesso!"
        })
    }
    return ( 
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <SmartphoneIcon />
                <p className="font-semibold text-sm">{phone}</p>
            </div>
            <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopyPhoneClick(phone)}
            >
                Copiar
            </Button>
        </div>
     );
}
 
export default PhoneItem;