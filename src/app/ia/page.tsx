/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Header from "../components/header/Header";
import TopicsBar from "../components/topicsbar/TopicsBar";
import ContainerRep from "../components/Container/Container";
import ContainerDad from "../components/Container/ContainerDad";
import AiComputing from "../../../public/assets/img/artificiaal-inteligence-computing.jpg"
import AiCodingGraphics from "../../../public/assets/img/ai-coding-productive-graphics.jpg"
import ManCodigWAi from "../../../public/assets/img/mancodingai.jpeg"
import CodingWai from "../../../public/assets/img/codeswai.jpg"
import BottomShadowHeader from "../components/bottomshadow/BottomShadow";
import { IoIosTimer } from "react-icons/io"
import { GrStatusGood } from "react-icons/gr";
import { LuHelpingHand } from "react-icons/lu";

export default function IaBlog() {
    return(
        <main>
        <Header/>
        <div className="flex flex-col">
        <BottomShadowHeader/>
            <ContainerDad>
            <ContainerRep>
            <h1 className="text-2xl self-center text-blue-dark border-b-2 pb-2 pl-2 pr-2
          border-black shadow-[4px_3px_4px_2px] shadow-indigo-600">Inteligência artificial na T.I</h1>
            <Image src={AiComputing} className="rounded-lg w-[500px] self-center mt-3" alt="programming languages image"/>

            <h2 className="text-2xl text-blue-dark mt-2 font-bold">O uso da I.A na programação</h2>
            <p>Avanços recentes em inteligência artificial (IA) introduziram ferramentas inteligentes que estão 
                revolucionando a codificação com o auxílio da IA. Essas ferramentas não buscam substituir os engenheiros
                 humanos, mas sim complementar suas capacidades. Sam Babic, diretor de inovação da Westlake, descreveu essas
                  soluções como "um segundo par de olhos", oferecendo uma nova perspectiva e assistência valiosa na programação.
<br /> <Image src={AiCodingGraphics} className="mt-4 mb-2" alt="graphics of coding with ai performance"/> <br />
Este blog irá definir a codificação com IA, explorar seus principais benefícios e recursos, e avaliar cinco notáveis
 ferramentas de codificação com IA.
<br /> <br />
<span className="text-xl text-purple-700 font-bold">O que é a codificação com IA?</span> <br />
<Image src={ManCodigWAi} className="w-[300px] ml-[20%] midtw:ml-[5%] midtw:w-[230px] low:w-[150px] low:ml-0
lowtwo3:w-[90px] rounded-sm mt-2 mb-2" alt="man coding with ai help"/>
A codificação com IA refere-se ao uso da inteligência artificial para auxiliar desenvolvedores na escrita e revisão de 
seu código, com o objetivo principal de aprimorar a qualidade do código e aumentar a produtividade. Essa prática está ganhando 
popularidade rapidamente, como evidenciado por uma pesquisa do GitHub que revela que 92% dos desenvolvedores baseados nos EUA 
já estão utilizando ferramentas de codificação com IA tanto no trabalho quanto fora dele.
<br /> <br />
<span className="text-xl text-purple-700 font-bold">Tecnologias usadas na codificação com IA</span><br />
Para uma compreensão mais clara, é essencial entender as principais tecnologias interconectadas que impulsionam a codificação com IA.
<br /> <br />
O processamento de linguagem natural (PLN) é um ramo da IA que permite que as máquinas compreendam a linguagem humana. Ele
 utiliza princípios linguísticos, estatísticas e algoritmos de aprendizado de máquina para interpretar a linguagem falada ou 
 escrita, indo além de interpretações literais para capturar nuances de contexto. Com o PLN, os computadores podem discernir 
 a intenção de uma pessoa e analisar os sentimentos expressos, assim como a percepção humana.
 <br /> <br />
 <span className="text-blue-dark">Deep Learning</span> <br />
  um subcampo do aprendizado de máquina, utiliza redes neurais artificiais para analisar grandes volumes
 de dados. O aprendizado profundo é capaz de lidar com tarefas complexas e intrincadas, como reconhecimento de fala e imagem. 
 As ferramentas de codificação com IA utilizam modelos de aprendizado profundo treinados em conjuntos de dados extensos de 
 código-fonte, muitas vezes derivados de projetos de código aberto.
<br /> <br />

<span className="text-blue-dark">A IA generativa</span>
<br />
Por sua vez, é um subconjunto do aprendizado profundo. Ela utiliza técnicas de aprendizado não supervisionado 
e semi-supervisionado para construir modelos de IA sofisticados capazes de produzir novo conteúdo com base em textos, imagens, 
arquivos de áudio ou, no caso em questão, código. A ideia é criar trabalhos originais indistinguíveis daqueles produzidos por um 
humano. Os grandes modelos de linguagem (LLM, na sigla em inglês) são um subconjunto desses modelos de IA generativa, com a principal
 função de prever a próxima palavra mais adequada para preencher um espaço vazio em um determinado texto, com base no contexto. Os 
 LLMs são treinados em grandes conjuntos de dados de texto e podem ser aplicados em diversas tarefas de PLN.
<br /> <br />

Aprofunde seu conhecimento lendo nosso artigo sobre modelos de linguagem e como eles funcionam.
<br /> <br />

Recomendamos também a leitura do artigo que explica de forma abrangente a diferença entre ciência de dados, aprendizado de máquina, 
IA, aprendizado profundo e mineração de dados.
<br /> <br />

<span className="text-xl text-blue-dark font-bold">Os benefícios da codificação com IA</span><br />
<Image src={CodingWai} className="w-[500px] ml-14 mt-3 mb-3 majorthree:ml-0" alt="coding with ai"/>
Com o aumento das ferramentas de codificação com IA, vamos explorar suas principais vantagens.
<br /> <br />

<span className="text-blue-dark flex-nowrap">Aumento da produtividade.</span> <IoIosTimer size={30} />
 ferramentas de codificação com IA podem aumentar 
significativamente a produtividade e acelerar o 
desenvolvimento de código. Elas economizam tempo ao automatizar tarefas repetitivas e demoradas, como formatação de código e 
geração de código padrão. Além disso, as ferramentas de codificação com IA generativa podem fornecer sugestões valiosas de código,
 ajudando os desenvolvedores a superar bloqueios criativos e iniciar o rascunho inicial do novo código. Em um estudo realizado pela
  McKinsey Digital, desenvolvedores foram atribuídos a tarefas de complexidade variada com prazos específicos. Os resultados
   mostraram que os participantes que utilizaram IA generativa tinham maior probabilidade de cumprir os prazos em comparação com 
   aqueles que não utilizaram tais ferramentas. Na verdade, a pesquisa revelou que a IA generativa é especialmente eficiente para 
   tarefas mais complexas, melhorando a produtividade em 25 a 30%.
<br /> <br />

<span className="text-blue-dark">Melhoria na qualidade do código.</span><GrStatusGood size={30} />
As ferramentas de codificação com IA aprimoram a precisão do código ao fornecer sugestões em tempo 
real com base nas melhores práticas do setor, identificar problemas, alertar sobre possíveis bugs ou vulnerabilidades de segurança 
e, de maneira geral, atuar como uma salvaguarda contra erros comuns de codificação. Isso ajuda os desenvolvedores a criar um código
 mais limpo e com menos erros.
<br /> <br />

<span className="text-blue-dark">Empoderamento de não-programadores e novatos.</span><LuHelpingHand size={30} />
 As ferramentas de codificação com IA tornam o desenvolvimento de código mais acessível
 para não-programadores e novatos. Ao fornecer orientação contextual e responder a comentários em linguagem natural, essas soluções
  simplificam a programação e facilitam a curva de aprendizado. Elas podem servir como mentores, explicando conceitos complexos e 
  fornecendo instruções passo a passo. Em essência, as ferramentas de codificação com IA oferecem assistência abrangente para 
  não-programadores e criam um ambiente de aprendizado colaborativo para novatos.
<br /> <br />

<span className="text-xl text-purple-700 font-bold">Recursos das ferramentas de codificação com IA</span><br /> <br />
Nesta seção, apresentamos os recursos mais comuns das ferramentas de codificação com IA, explorando as diversas formas como 
a IA pode contribuir para otimizar o processo de desenvolvimento de software. Além das funcionalidades mencionadas aqui, algumas
 ferramentas de codificação com IA também podem realizar refatoração de código, documentação de código, fornecer explicações
  e buscar determinados arquivos e trechos de código.
<br /> <br />

<span className="text-blue-dark">Completamento de código</span><br />
O completamento de código com IA envolve sugerir trechos de código à medida que os desenvolvedores digitam, prevendo o próximo
 código que provavelmente será escrito com base no contexto. Isso reduz a entrada manual, aumenta a consistência do código e 
 minimiza erros, o que é especialmente valioso para tarefas repetitivas.
<br /> <br />

<span className="text-blue-dark">Geração de código</span><br />
A geração de código com IA é um processo que transforma instruções em linguagem natural descrevendo a funcionalidade desejada 
em código executável. Ela compreende as sugestões fornecidas e oferece código contextualmente relevante, levando em consideração
 os padrões de programação estabelecidos.
<br /> <br />

<span className="text-blue-dark">Tradução de código</span> <br />
A tradução de código refere-se à conversão do código-fonte para a linguagem de programação desejada. Isso permite integrar
 o código de diferentes equipes dentro da organização ou de outros projetos de código aberto de forma transparente. 
 Também pode reduzir o esforço e o custo de atualizar bases de código legado escritas em linguagens de programação antigas,
  como COBOL ou Ada.
<br /> <br />
<span className="text-blue-dark">Revisão de código</span>
<br />
A revisão de código é um processo de avaliação que aproveita o poder da IA para aumentar a qualidade do código, identificando
 e corrigindo erros. As ferramentas de codificação com IA também podem gerar comentários e explicações em linguagem natural. 
 Isso facilita bastante o entendimento do processo de revisão, o que é especialmente benéfico para desenvolvedores</p>
            </ContainerRep>
            <TopicsBar/>
            </ContainerDad>
        </div>
        </main>
    );
}