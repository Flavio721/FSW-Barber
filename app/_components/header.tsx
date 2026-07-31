import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
    <Card>
        <CardContent className="justify-between flex flex-row p-5 ">
            <Image alt="FSW Barber" src="/Logo.png" width={130} height={22}/>
            <Button size="icon" variant="outline">
                <MenuIcon />
            </Button>
        </CardContent>
    </Card>
    )
}
 
export default Header;