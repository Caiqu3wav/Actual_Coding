"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"
import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isCloseIcon, setIsCloseIcon] = useState(false);

    

    const sideList = [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'Blogs',
          path: '/blogs',
        },
        {
          title: 'Topicos',
          path: '/topicos',
        },
        {
          title: 'Sobre',
          path: '/sobre',
        },
      ];

    const toggleMenu = () => {
        setIsActive(!isActive);
        setIsCloseIcon(!isCloseIcon);
    }

    useEffect(() => {
        const handleEscKeyPress = (e) => {
            if (e.keycode === 27 && isActive) {
                setIsActive(false);
            }
        };

        if (isActive) {
            document.body.style.setProperty("overflow", "hidden");
        }else {
            document.body.style.setProperty("overflow", "auto");
        }

        document.addEventListener("keydown", handleEscKeyPress);
        
        return () => {
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, [isActive]);
   
    return(
        <nav className="ml-14 flex justify-between h-fit low:w-[90px low:mr-0]">
            <ul className="flex list-none no-underline gap-5">
                <Link href="/"><li>Home</li></Link>
                <li>Blogs</li>
                <li>Topicos</li>
                <li>Sobre</li>
            </ul>
            <button aria-label="Open Menu" onClick={toggleMenu} className="hidden self-center">
                <GiHamburgerMenu size={60} className="low:size-10" style={{ color: 'purple' }} />
</button>

                {isActive && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsActive(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex="0"
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 lowtwo2:w-44 lowthreetwo:w-36 bg-blue-light text-purple-500 font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
         
         {sideList.map(({ title, path }, index) => (
    <Link href={path} key={index}>
        <span className="flex items-center p-4 hover:bg-pink-500 hover:text-purple-600">
          <span className="border-b-4">{title}</span>
        </span>
    </Link>
  ))}
      </aside>
        </nav>
    );
}