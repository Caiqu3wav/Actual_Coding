'use client';
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useEffect, useState } from "react";

 const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)

    return () => {
        window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

    const scrollToTop = () => {
        isVisible && 
        window.scrollTo({
            top: 0,
            behavior: "auto",
        })
    }

    return(
        <button className={` fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 ${ 
            isVisible ? "opacity-100" : "opacity-0"}`} onClick={scrollToTop}>
                <IoIosArrowDropupCircle size={40}/>
        </button>
    )
}

export default ScrollToTopButton;