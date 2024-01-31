import Navbar from "../navbar/Navbar";
import Image from "next/image";
import ActualCodLogo from "../../../../public/assets/img/actcodlogo.png";
import "./Header.css"
import { Suspense } from "react";
import Loading from "../loading/loading"

export default function Header() {

    return(
        <header className="w-full h-[110px] flex justify-between items-center">
            <Suspense fallback={<Loading/>}><Image src={ActualCodLogo} className="w-[110px] ml-2 low:w-[60px]" alt="actual coding logo"/></Suspense>
            <Navbar/>
            <button className="mr-3 bg-slate-400 h-20 rounded-lg low:w-[120px] low:mr-1 low:text-sm lowthree:text-[9px] "><p>Inscreva-se na NewsLetter</p></button>
        </header>
    );
}