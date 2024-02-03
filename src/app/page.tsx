import Image from "next/image";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ScrollToTopButton from "./components/ScrollUpBtn";

export default function Home() {
  return (
    <body>
    <main>
      <Header/>
      <Hero/>
    </main>
    <ScrollToTopButton/>
    </body>
  );
}
