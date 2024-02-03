import LanguagesDat from "../../../public/assets/img/programming-languages.jpg";
import Image from "next/image";
import Header from "../components/header/Header";
import TopicsBar from "../components/topicsbar/TopicsBar";
import ContainerDad from "../components/container/ContainerDad.jsx";
import ContainerRep from "../components/container/Container.jsx";
import BottomShadowHeader from "../components/bottomshadow/BottomShadow";
import "./actuallanguages.css";
import IndeedStatistic from "../../../public/assets/img/Jobs-on-Indeed.jpg";
import GlassdoorStatistic from "../../../public/assets/img/Jobs-on-Glassdoor.jpg";
import ScrollToTopButton from "../components/ScrollUpBtn";


export default function ActualLanguages() {
    return(
        <main>
            <Header/>
            <div className="flex flex-col">
            <BottomShadowHeader/>
            <ContainerDad>
          <ContainerRep>
          <h1 className="text-2xl self-center text-blue-dark border-b-2 pb-2 pl-2 pr-2
          border-black shadow-[4px_3px_4px_2px] shadow-indigo-600 lowone:text-[18px] lowone:pr-0 lowone:pl-0">Linguagens de programação em 2024</h1>
            <Image src={LanguagesDat} className="rounded-lg w-[500px] self-center mt-3" alt="programming languages image"/>
            <p className="mt-2">Toda indústria de software ou TI tem programadores profissionais responsáveis por garantir que 
                seu produto funcione sem problemas. Uma linguagem de programação é a ferramenta mais essencial para os 
                desenvolvedores de software escreverem código e é por isso que todo ano surge a pergunta confusa entre os
                 desenvolvedores e programadores iniciantes sobre qual linguagem eles devem aprender.
<br /> <br />
Existem dezenas de linguagens de programação, então escolher a ideal para um trabalho pode ser uma decisão complicada. É 
preciso considerar muitos fatores, como curva de aprendizado, estabilidade, empregos no mercado, salário, ajuda da comunidade
 e muitas outras coisas antes de escolher uma linguagem de programação.</p>
<br />
 <h2 className="text-blue-dark text-[30px]">Linguagens em alta demanda na atualidade(2024)</h2>
        <p>A Glassdoor e a Indeed são plataformas populares de busca de empregos e informações sobre empresas. Ambas oferecem 
            aos usuários a oportunidade de pesquisar vagas de emprego, aprender sobre a cultura de empresas e também ler avaliações
             de funcionários.

Em relação às linguagens de programação mais populares de 2023 em diante, de acordo com os gráficos de tendências, há algumas que se 
destacam.</p>
<Image src={GlassdoorStatistic} className="mt-3" alt="statistics grafic of popular languages on glassdoor"/>
<Image src={IndeedStatistic} className="mt-3" alt="statistics grafic of popular languages on indeed"/>
<p className="mt-3">Essas informações são baseadas em dados e tendências observadas nos gráficos de 2023 em diante, refletindo a 
    realidade do mercado de trabalho em 2024. <br />
    Isso é só uma visão geral do mercado, porém essas estatísticas pra isso em sí são muito complexas, pois todas as linguagens são 
    utilizadas e sempre tem algum lugar requisitando e precisando de pessoas pra certas operações e linguagens, até mesmo aquelas que são
    menos populares.
</p>
<h2 className="text-blue-dark text-3xl">Linguagens para programar em 2024</h2>
<p>Quais são as melhores linguagens de programação para aprender em 2024? 

Se você está buscando aprender uma linguagem de programação, JavaScript e Python são duas das mais populares na indústria de startups e estão em alta demanda. A maioria das startups utiliza frameworks de backend baseados em Python como Django e Flask, assim como NodeJS, que é baseado em JavaScript. Além disso, essas linguagens são consideradas as melhores para iniciantes.

Abaixo está uma lista resumida das linguagens de programação mais populares e procuradas em 2024:
</p>
<ol className="text-2xl text-blue-dark self-center mt-2 mb-2">
<li>1 - JavaScript</li>
<li>2 - Python</li>
<li>3 - Java</li>
<li>4 - Kotlin</li>
<li>5 - SwiftC &C++</li>
<li>6 - PHP</li>
<li>7 - Go</li>
<li>8 - R</li>
<li>9 - C#</li>
</ol>
<p>Essas linguagens oferecem diversas oportunidades de carreira e são muito requisitadas no mercado atual.</p>
<p className="text-blue-dark mt-3 text-xl">Agora veja mais informações sobre essas linguagens:</p>
<p className="languages-paragraph mt-2"><span>1. JavaScript:</span> <br />
JavaScript é uma das linguagens mais populares e amplamente utilizadas no desenvolvimento web. 
É a linguagem principal para adicionar interatividade e funcionalidade dinâmica a sites e aplicativos. 
Além disso, o JavaScript também pode ser usado para desenvolver aplicativos móveis, jogos e até mesmo softwares
 de servidor. Com a ascensão de frameworks como React, Angular e Node.js, a demanda por desenvolvedores JavaScript
  tem sido alta e continua em crescimento.
  <br /> <br />
  <span>2. Python:</span><br />
Python é uma linguagem de programação versátil que ganhou grande popularidade nos últimos anos. É utilizado 
em diversas áreas, como desenvolvimento web, ciência de dados, inteligência artificial, automação de tarefas e
 muito mais. Com uma sintaxe simples e legível, Python é conhecido por sua facilidade de aprendizado e legibilidade 
 do código. A demanda por desenvolvedores Python tem sido alta, especialmente devido ao seu uso em frameworks populares
  como Django e Flask.
  <br /> <br />
  <span>3. Java:</span><br />
Java é uma linguagem de programação robusta e muito utilizada em desenvolvimento de aplicativos empresariais em grande 
escala. É uma linguagem orientada a objetos e possui uma grande comunidade de desenvolvedores. Java é usado especialmente
 no desenvolvimento de aplicativos Android, sendo a linguagem oficial para isso. Além disso, é comum encontrar Java em 
 sistemas financeiros, de saúde e em diversas outras áreas que exigem alta confiabilidade e segurança.
 <br /> <br />
 <span>4. Kotlin:</span><br />
Kotlin é uma linguagem de programação moderna que foi desenvolvida para ser totalmente interoperável com Java. Ela foi 
adotada oficialmente pela Google como a linguagem de programação preferida para o desenvolvimento de aplicativos Android. 
Com uma sintaxe clara e concisa, Kotlin busca melhorar a produtividade e reduzir o código boilerplate em comparação com o 
Java. A demanda por desenvolvedores Kotlin tem crescido à medida que mais empresas começam a adotá-lo para o desenvolvimento
 de aplicativos Android.
 <br /> <br />
 <span>5. Swift:</span><br />
Swift é uma linguagem de programação criada pela Apple e é a linguagem principal para desenvolvimento de aplicativos iOS, 
macOS, watchOS e tvOS. Foi projetada para ser segura, rápida e de fácil desenvolvimento. Com o lançamento do Swift como código
 aberto, a linguagem tem ganhado popularidade fora do ecossistema da Apple. A demanda por desenvolvedores Swift é alta, 
 especialmente no desenvolvimento de aplicativos para dispositivos Apple.
 <br /> <br />
 <span>6. PHP:</span><br />
PHP é uma linguagem de programação amplamente utilizada para o desenvolvimento de sites e aplicativos web. É conhecida pela
 sua simplicidade e fácil integração com o HTML. Muitos dos sites mais populares, como o Facebook, foram criados com o uso de
  PHP. Apesar de algumas críticas em relação à sua sintaxe e desempenho, a demanda por desenvolvedores PHP ainda é significativa,
   especialmente em projetos de desenvolvimento web.
   <br /> <br />
   <span>7. Go:</span><br />
Go, também conhecida como Golang, é uma linguagem de programação desenvolvida pelo Google que visa ser eficiente, moderna e fácil 
de usar. Ela tem como foco principalmente sistemas distribuídos e aplicativos de larga escala. Com uma sintaxe concisa e suporte 
integrado para concorrência, Go é especialmente adequada para construir serviços web e aplicativos que exigem alto desempenho e 
escalabilidade. A demanda por desenvolvedores Go tem aumentado, acompanhando o crescimento de projetos que utilizam essa linguagem.
<br /> <br />
<span>8. R:</span><br />
R é uma linguagem especialmente projetada para análise de dados e estatísticas. É amplamente utilizada por cientistas de dados, 
estatísticos e pesquisadores para explorar, visualizar e modelar dados. A comunidade em torno de R é muito ativa, oferecendo uma
 ampla variedade de pacotes e bibliotecas para análise e visualização de dados. Embora a demanda por desenvolvedores R seja menor
  em comparação com outras linguagens, ela continua sendo essencial no campo da análise de dados.
<br /> <br />
<span>9. C#:</span><br />
C# é uma linguagem de programação desenvolvida pela Microsoft e é uma das principais linguagens usadas no desenvolvimento de 
aplicativos para a plataforma .NET. É uma linguagem orientada a objetos com recursos avançados, especialmente no desenvolvimento
 de aplicativos Windows. Além disso, C# também é usado para desenvolver jogos com o Unity, um dos principais motores de jogos da
  indústria. A demanda por desenvolvedores C# é constante, especialmente em empresas que utilizam a plataforma .NET.
  <br /> <br />
É importante ressaltar que a demanda por cada linguagem pode variar de acordo com a região geográfica, setor da indústria e 
tendências do mercado de trabalho. É sempre recomendado pesquisar e ajustar suas habilidades de programação de acordo com as
 demandas específicas da área que você deseja seguir.</p>
 <h1 className="text-blue-dark text-3xl mt-2 mb-2">Visão geral das linguagens de programação e tecnologias</h1>
 <p>As linguagens de programação são ferramentas essenciais para desenvolver software e aplicativos. Existem muitas 
    opções disponíveis devido às diferentes necessidades e tipos de projetos. Cada linguagem tem suas próprias características
     e vantagens, o que proporciona uma ampla variedade de opções para os desenvolvedores escolherem.
<br /> <br />
Uma das razões para a existência de tantas linguagens de programação é que cada uma foi desenvolvida para resolver problemas
 específicos. Algumas linguagens são voltadas para o desenvolvimento web, enquanto outras são mais adequadas para a criação de
  aplicativos móveis, análise de dados ou desenvolvimento de sistemas operacionais. Portanto, a escolha da linguagem certa 
  depende do objetivo do projeto.
  <br /> <br />
Outro aspecto importante a se considerar é o nível de abstração de uma linguagem. As linguagens de programação podem ser 
classificadas em dois níveis principais: baixo nível e alto nível. As linguagens de baixo nível, como o Assembly, estão muito 
próximas da linguagem de máquina e lidam diretamente com o hardware do computador. Elas fornecem um controle granular sobre os
 recursos do sistema, mas têm uma curva de aprendizado mais íngreme. Já as linguagens de alto nível, como Python, JavaScript e Java,
  são mais fáceis de ler e escrever, oferecendo uma abstração mais elevada, permitindo que os desenvolvedores se concentrem na 
  lógica do programa sem se preocupar com os detalhes do hardware.
  <br /> <br />
Além disso, é importante entender a diferença entre as tecnologias de backend e frontend. O backend refere-se à parte do software
 que lida com o processamento dos dados e a lógica do aplicativo. Isso inclui a interação com bancos de dados, a implementação
  de algoritmos complexos e a criação de APIs para comunicação entre diferentes partes do sistema. As linguagens populares para 
  desenvolvimento backend incluem Python, Java, C# e Ruby.
  <br /> <br />
Por outro lado, o frontend diz respeito à interface com o usuário e a experiência do usuário. Envolve a criação de páginas web 
interativas, aplicativos móveis e interfaces gráficas. As principais linguagens e tecnologias usadas no frontend incluem 
JavaScript, HTML e CSS. Essas linguagens permitem que os desenvolvedores criem interfaces atraentes e responsivas, garantindo
 uma experiência agradável para o usuário final.
 <br /> <br />
Quanto aos bancos de dados, eles são componentes essenciais para armazenar e gerenciar grandes quantidades de dados. 
Existem diferentes tipos de bancos de dados, como bancos de dados relacionais (como MySQL, Oracle e PostgreSQL) e bancos de 
dados NoSQL (como MongoDB e Cassandra). Os bancos de dados relacionais são usados principalmente em cenários que exigem 
estruturação rigorosa dos dados, enquanto os bancos de dados NoSQL são mais flexíveis e escaláveis, adequados para armazenar 
grandes volumes de dados não estruturados.
<br /> <br />
Em resumo, as linguagens de programação são diversas porque atendem a diferentes necessidades e problemas. As linguagens de 
baixo nível oferecem controle e otimização, enquanto as linguagens de alto nível proporcionam produtividade e facilidade de uso.
 O desenvolvimento backend lida principalmente com a lógica e os dados do aplicativo, enquanto o frontend se concentra na interface 
 do usuário. Os bancos de dados são fundamentais para armazenar e gerenciar dados de forma eficiente. A escolha das linguagens e
  tecnologias certas depende do objetivo e dos requisitos do projeto.</p>
            </ContainerRep>
            <TopicsBar/>
            </ContainerDad>
        </div>
        <ScrollToTopButton/>
        </main>
    );
}