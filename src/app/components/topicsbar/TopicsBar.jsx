"use client";
import "./topicbar.css"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TopicsLogo from "../../../../public/assets/img/topicslogo.png";
import { FaLowVision } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export default function TopicsBar() {
    const [isListVisible, setListVisible] = useState(false);

    const toggleList = () => {
        setListVisible(!isListVisible);
    };

    return (
        <div className="topic-bar text-xl midthree:text-sm pt-4 flex flex-col w-[30%] h-fit pb-4 rounded-2xl mt-4">
            <Image src={TopicsLogo} className="self-center w-16 pb-4"/>
           <div className="ml-2 mr-2 h-[100px] border-t-2 border-b-2">
           <button onClick={toggleList} className="mt-[10%] w-[90%] flex justify-between midtwo2:flex-col">
            <h1 className=" font-semibold">Blogs</h1>{isListVisible ? <FaLowVision size={26} className="midthree:size-5" /> : <FaAngleDown size={30} />}
            </button>
            </div>
            <ul
        className={`flex flex-col ml-2 mr-2 h-fit text-lg midthree:text-[13px] text-blue-dark gap-4 ${
          isListVisible ? "visible" : "hidden"
        }`}
      >           <li className="pt-2"><Link href="/actuallanguages"><button>Linguagens de programação atualidade</button></Link></li>
           <li className="border-t-2 border-violet-700 pt-2">
            <Link href="/ia" className=""><button>Inteligência artificial</button></Link>
            </li>
           </ul>
           <div className="ml-2 mr-2 h-[100px] border-t-2 border-b-2">
           <Link href="/hero"><h1 className="mt-[10%] text-xl midthree:text-sm font-semibold">Temas</h1></Link>
            </div>
        </div>
    );
}