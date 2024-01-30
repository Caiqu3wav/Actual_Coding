/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ContainerRep from "../container/Container";
import MainInfoContainer from '../mainInfoContainer/MainInfoContainer';
import FuturePC from "../../../../public/assets/img/futuristic-pc.jpg";
import BottomShadowHeader from "../bottomshadow/BottomShadow";
import TopicsBar from "../topicsbar/TopicsBar";
import ContainerDad from "../container/ContainerDad";
;
import Link from "next/link";

export default function Hero() {

    return(
        <div className="flex flex-col">
          <BottomShadowHeader/>
            <MainInfoContainer/>
            <ContainerDad>
            <ContainerRep>
                <p className="text-md ">"O panorama de desenvolvimento de software em 2024 é dinamico, com tendências
                tipo desenvolvimento impulsionado por I.A, computação quantica, e plataformas low-code
                remodelando a industria. Em termos de evolução técnologia, desenvolvedores
                devem se manter adaptáveis, abraçando as tendências para criar inovativas e
                eficientes soluções. O futuro promete avanços empolgantes,
                promovendo uma abordagem de ponta e colaborativa para o desenvolvimento de software."</p>
              <a href="https://medium.com/@Jamie_at_technoyuga" className="w-[50px]" target="_blank">
                <p className="text-lg font-extrabold w-fit">(Writen by Jamie.)</p>
                </a> 
                <h1 className="text-blue-dark text-3xl">Resumo do cenário atual</h1> 
                <p>
                O mundo do desenvolvimento de software está em constante evolução. A cada ano que passa, novas 
                tecnologias e metodologias surgem, moldando a maneira como construímos e implantamos software. 
                Assim que chegamos em 2024, é crucial que os desenvolvedores e entusiastas da tecnologia 
                estejam à frente do jogo. Neste artigo, exploraremos algumas das principais tendências que definirão o
                 futuro do desenvolvimento de software em 2024.</p>
                 <Image src={FuturePC} alt="futuristic computer" className="mt-3 mb-3"/>
<p>
Em 2024, podemos esperar ver ferramentas e plataformas impulsionadas por inteligência artificial (IA) que auxiliam os
 desenvolvedores de várias maneiras. Essas ferramentas automatizarão tarefas repetitivas, gerarão código e até mesmo 
 ajudarão na depuração. Ferramentas de teste e revisão de código impulsionadas por IA garantirão maior qualidade de código
  e ciclos de desenvolvimento mais rápidos.
<br /> <br />
Embora a computação quântica ainda esteja em estágio inicial, ela está avançando constantemente. Em 2024, poderemos 
testemunhar o início da integração da computação quântica no desenvolvimento de software. A computação quântica tem o potencial
 de resolver problemas complexos que atualmente são impossíveis para os computadores clássicos, o que poderia revolucionar setores
  como criptografia, otimização e simulações.
<br /> <br />
A tendência de plataformas de desenvolvimento de baixo código e sem código continuará ganhando força em 2024. Essas plataformas
 capacitam pessoas com pouca experiência em programação a construir aplicativos funcionais. Essa democratização do 
 desenvolvimento levará a um aumento na inovação e a um grupo mais amplo de desenvolvedores.
<br /> <br />
À medida que a Internet das Coisas (IoT) continua a crescer, a computação de borda se tornará cada vez mais importante. 
Dispositivos de borda, como smartphones e sensores IoT, requerem processamento de baixa latência. Em 2024, os desenvolvedores 
de software se concentrarão em criar aplicativos que possam aproveitar a computação de borda para processamento de dados mais 
rápido e latência reduzida.
<br /> <br />
Realidade virtual (VR) e realidade aumentada (AR) estão se expandindo além dos jogos e do entretenimento. Em 2024, podemos 
antecipar mais aplicativos que incorporam tecnologias de realidade estendida (XR). Desde simulações de treinamento imersivas 
até experiências aprimoradas para clientes, os desenvolvedores de software explorarão novas maneiras de aproveitar o potencial 
do XR.
<br /> <br />
Com o aumento das ameaças cibernéticas e violações de dados, a segurança cibernética será uma prioridade para os desenvolvedores
 de software em 2024. As equipes de desenvolvimento precisarão adotar uma mentalidade de "segurança em primeiro lugar",
  implementando medidas de segurança robustas ao longo do ciclo de desenvolvimento. Isso inclui práticas de codificação segura,
   avaliações de vulnerabilidades e monitoramento contínuo.
<br /> <br />
À medida que a IA se torna mais presente, as preocupações éticas em torno dos algoritmos de IA e do uso de dados aumentarão. 
Em 2024, os desenvolvedores de software darão grande ênfase ao desenvolvimento ético de IA, garantindo justiça, transparência 
e responsabilidade nos sistemas de IA. Práticas de IA responsáveis serão fundamentais para construir confiança com usuários e 
partes interessadas.
<br /> <br />
A tecnologia blockchain não se limita apenas às criptomoedas. Em 2024, provavelmente veremos um aumento no uso de blockchain 
no desenvolvimento de software para armazenamento seguro de dados, verificação de identidade e gerenciamento da cadeia de 
suprimentos. A natureza resistente a adulterações do blockchain torna-o uma ferramenta valiosa para aumentar a segurança em 
várias aplicações.
<br /> <br />
A tendência de trabalho remoto e colaborativo persistirá, levando ao desenvolvimento de ambientes de desenvolvimento mais 
colaborativos. Ferramentas e plataformas que facilitam a colaboração em tempo real entre equipes de desenvolvimento geograficamente
 dispersas se tornarão comuns.
 <br /> <br />
Em uma era de crescente conscientização ambiental, o desenvolvimento de software sustentável ganhará destaque em 2024.
 Os desenvolvedores se concentrarão em otimizar o código para eficiência energética, reduzindo o consumo de recursos e 
 minimizando a pegada de carbono das aplicações de software.
 <br /> <br />
Em conclusão, o cenário do desenvolvimento de software está preparado para mudanças significativas em 2024. Os desenvolvedores
 que abraçarem essas tendências e se adaptarem ao cenário tecnológico em constante evolução estarão bem posicionados para criar
  soluções de software inovadoras, eficientes e seguras para o futuro.
  <br /> <br />
Prepare-se para um ano emocionante, à medida que testemunhamos a transformação do desenvolvimento de software em 2024 e além.
                </p>
                <Link href="/blogs"><h2>Veja mais blogs sobre</h2></Link>
            </ContainerRep>
            <TopicsBar/>
            </ContainerDad>
        </div>
    );
}