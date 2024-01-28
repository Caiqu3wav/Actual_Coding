import "./topicbar.css"
import Link from "next/link";
import Image from "next/image";
import TopicsLogo from "../../../../public/assets/img/topicslogo.png"

export default function TopicsBar() {
    return (
        <div className=" topic-bar pt-4 flex flex-col w-[400px] h-fit pb-4 rounded-2xl mt-4">
            <Image src={TopicsLogo} className="self-center w-16 pb-4"/>
           <div className="ml-2 mr-2 h-[100px] border-t-2 border-b-2">
           <Link href="/hero"><h1 className="mt-[10%]">Blogs</h1></Link>
            </div>
           <div className="ml-2 mr-2 h-[100px] border-t-2 border-b-2">
           <Link href="/hero"><h1 className="mt-[10%]">Temas</h1></Link>
            </div>
        </div>
    );
}