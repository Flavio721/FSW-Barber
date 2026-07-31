import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";

const Home = () => {
  return(
    <div>
      <Header />
      
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">Olá, Flávio!</h2>
        <p>Sexta-feira, 31 de Julho</p>

        {/* BUSCA */}
        <div className="flex flex-row mt-3 gap-2">
          <Input className="p-2" placeholder="Faça sua busca"/>
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="mt-5 flex flex-row gap-2">
          <Button className="bg-transparent pt-6 pr-6 pb-6 pl-6 border-radius">
            <Image alt="Cabelo" src="/tesoura.png" width={20} height={16}/>
            <h2 className="text-lg font-bold">Cabelo</h2>
          </Button>
          <Button className="bg-transparent pt-6 pr-6 pb-6 pl-6 border-radius">
            <Image alt="Bigode" src="/bigode.png" width={20} height={16}/>
            <h2 className="text-lg font-bold">Bigode</h2>
          </Button>
          <Button className="bg-transparent pt-6 pr-6 pb-6 pl-6 border-radius">
            <Image alt="Acabamento" src="/navalha.png" width={20} height={16}/>
            <h2 className="text-lg font-bold">Acabamento</h2>
          </Button>
        </div>

        {/* BANNER */}
        <div className="relative w-full h-[150px] mt-4">
          <Image alt="Agende nos melhores com FSW Barber" src="/Banner.png" className="object-cover rounded-xl" fill />
        </div>

        {/* AGENDAMENTOS */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#838896] line-clamp-3 ">AGENDAMENTOS</h2>
          <Card className="mt-2">
            <CardContent className="flex justify-between">
                {/* ESQUERDA */}
                <div className="flex flex-col items-start gap-2 p-5">
                  <Badge className="rounded-xl font-bold">CONFIRMADO</Badge>
                  <h2 className="font-semibold text-lg">Corte de Cabelo</h2>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                    </Avatar>
                    <p className="text-sm">Barbearia FSW</p>
                  </div>
                </div>

                {/* DIREITA */}
                <div className="flex flex-col items-center justify-around p-5 border-l w-24">
                  <p className="text-sm">Julho</p>
                  <p className="text-lg">31</p>
                  <p className="text-sm">18:00</p>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
 
export default Home;