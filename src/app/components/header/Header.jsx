import Navbar from "../navbar/Navbar";
import Image from "next/image";
import ActualCodLogo from "../../../../public/assets/img/actcodlogo.png";
import "./Header.css"


export default function Header() {

    return(
        <header className="w-full h-[110px] flex justify-between items-center">
            <Image src={ActualCodLogo} className="w-[110px]" alt="actual coding logo"/>
            <Navbar/>
            <button className="mr-3">Inscreva-se na NewsLetter</button>
        </header>
    );
}