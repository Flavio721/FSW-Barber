import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { quickSearchOptions } from "../_constants/search";

const Header = () => {
    return ( 
    <Card>
        <CardContent className="justify-between flex flex-row p-5 ">
            <Image alt="FSW Barber" src="/Logo.png" width={130} height={22}/>

            <Sheet>
                <SheetTrigger
                    render={
                        <Button size="icon" variant="outline">
                        <MenuIcon />
                        </Button>
                    }
                />
                <SheetContent className="overflow-y-auto">
                    <SheetHeader className="flex justify-center">
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>

                    <div className="flex items-center gap-3 border-b border-solid p-3">
                        <Avatar>
                            <AvatarImage src="/image.jpg"/>
                        </Avatar>

                        <div>
                            <p className="font-bold">Pedro Gonçalves</p>
                            <p className="text-xs">pedrogonçalves@email.com</p>
                        </div>


                    </div>

                    <div className="flex flex-col">
                        <Button className="flex justify-start p-3 h-12">
                            <HomeIcon size={18}/>
                            <p>Home</p>
                        </Button>
                        <Button variant={"ghost"} className="flex justify-start p-3 h-12">
                            <CalendarIcon size={18}/>
                            <p>Agendamentos</p>
                        </Button>
                    </div>
                
                    <div className="flex flex-col gap-2 p-3">
                        {quickSearchOptions.map(item => (
                            <Button variant={"ghost"} className="flex justify-start gap-2 p-2 h-12">
                                <Image alt={item.title} src={item.imageUrl} height={18} width={18}/>
                                <p>{item.title}</p>
                            </Button>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </CardContent>
    </Card>
    )
}
 
export default Header;