import Header from "../components/header/Header";
import CaiqueAnimation from "../../../public/assets/img/Caique-character15(producing).png";
import BottomShadowHeader from "../components/bottomshadow/BottomShadow";
import Image from "next/image";
import "./about.css"
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscGithubAction } from "react-icons/vsc";
import Link from "next/link";
import { MdAttachEmail } from "react-icons/md";

export default function About(){
    return(
        <main>
        <div className="flex flex-col">
        <Header/>
        <BottomShadowHeader/>
        <div className="hero-container self-center w-[70%] lowtwo3:w-[80%] lowtwo:ml-2 flex flex-col pl-3 pr-3 rounded-3xl pb-6 items-center
        justify-center mt-2">
            <Image className="rounded-[30%] self-center w-[50%]" src={CaiqueAnimation} alt="Caique (the developer of this page) animate art image"/>
                <h1 className="caique-name midfour:text-[18px]">Caique_WAV</h1>
                <h1 className="text-xl text-blue-light font-bold text-center">Programador em ascenção!</h1>
                <p className="text-white">Olá, meu nome é Caique dono deste blog e sou um programador fullstack que desde o começo e a descoberta
                    se apaixonou por isso, uma pessoa que gosta de desafios e isso foi um dos motivos de entrar pra área. <br />
                    o meu objetivo com este site é aprender mais praticando com projetos, ensinar pessoas por mais que mais óbvio as vezes pareça 
                    o que está escrito nos blogs, parece assim pra quem já sabe dos assuntos, mas para iniciantes e pessoas que não sabem nada,
                    pode ser muito informativo e até um incentivo pra pessoa entrar pra área ou apenas aprender, além da parte de eu tentar trazer
                    assuntos atuais sobre a área. Além disso uma das melhores maneiras de aprender é ensinando o que traz vantagem pra mim. <br />
                    sou um programador focado em React/Next, JavaScript, NodeJS, MySQL/MongoDB e Java, se você está curioso, gostou do meu trabalho
                    e quer saber mais sobre mim, outros projetos meus ou até me contratar pra freelance/job, acesse meu portfóio abaixo. 
                </p>
                <FaArrowAltCircleDown size={40} className="bounce2 mt-4"/>
                <div className="flex mt-4">
                    <VscGithubAction size={25}/>: <Link href="https://caiques-portfolio.vercel.app" target="_blank">
                        <p className="links-inform ml-2 text-blue-900">https://caiques-portfolio.vercel.app</p></Link>
                </div>
                <div className="flex mt-4">
                    <FaLinkedin size={25}/>: <Link href="https://www.linkedin.com/in/caique-dos-santos-a69425246/" target="_blank">
                        <p className="links-inform ml-2 text-blue-900">https://www.linkedin.com/in/caique-dos-santos-a69425246/</p></Link>
                </div><div className="flex mt-4">
                    <FaGithub size={25}/>: <Link href="https://github.com/Caiqu3wav" target="_blank">
                        <p className="links-inform ml-2 text-blue-900">https://github.com/Caiqu3wav</p></Link>
                </div>
                <div className="flex mt-4">
                    <MdAttachEmail size={25}/>:
                        <p className="links-inform ml-2 text-blue-900">@asapcaique7@gmail.com</p>
                </div>
            </div>
</div>
</main>
    );
}