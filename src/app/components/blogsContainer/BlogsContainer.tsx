'use client';
import Image from "next/image";
import ActualCodingLogo from "../../../../public/assets/img/actcodlogo.png"
import { useEffect, useState } from "react";
import "../container/Container.css";
import "./BlogsContainer.css"
import Link from "next/link";

export default function BlogsContainer() {
const [blogs, setBlogs] = useState([]);
const [ordenacao, setOrdenacao] = useState('recentes');
   
    useEffect(() => {
      async function fetchBlogs() {
        try {
          const response = await fetch('/api/blogs');
          const data = await response.json();
    
          const blogsOrdenados = data.sort((a: { dataLnc: string | number | Date; }, b: { dataLnc: string | number | Date; }) => {
            const dataA = new Date(a.dataLnc);
            const dataB = new Date(b.dataLnc);
    
            return ordenacao === 'recentes' ? dataB - dataA : dataA - dataB;
          });
    
          setBlogs(blogsOrdenados);
        } catch (error) {
          console.error('Erro ao buscar blogs', error);
        }
      }
    
      fetchBlogs();
    }, [ordenacao]);

    const imagesW = "200px";
    

    return(
        <div className="hero-container self-center w-[89%] h-fit lowtwo3:w-[80%] midtwo2:w-[90%] lowtwo:ml-2 flex flex-col pl-3 pr-3 rounded-3xl pb-6 items-center
        justify-center mt-2">
            <Image src={ActualCodingLogo} className="self-center w-[100px]" alt="actual coding logo"/>
        <div className='grid grid-cols-3 midthree:grid-cols-2 low:grid-cols-1 justify-between gap-6 pb-4 pl-2 pr-2 bg-slate-400 rounded-lg'>
        {blogs.map((blog) => (
    <div key={blog.id} className="flex flex-col items-center justify-center gap-2">
      <Link href={blog.link} className="flex flex-col items-center justify-center">
        <img src={blog.imagem} alt="blog image" className="blog-image mt-1 rounded-lg w-[90%]"/>
        <h1 className="text-purple-700 text-xl midfour:text-[17px] font-bold text-center">{blog.nome}</h1>
        <p>{blog.descr}</p>
        </Link>
    </div>
))}
        </div>
        </div>
    );
}