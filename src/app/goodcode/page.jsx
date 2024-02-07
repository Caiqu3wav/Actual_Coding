/* eslint-disable react/no-unescaped-entities */
import Header from "../components/header/Header";
import ContainerDad from "../components/container/ContainerDad";
import ScrollUpBtn from "../components/ScrollUpBtn";
import ContainerRep from "../components/container/Container";
import TopicsBar from "../components/topicsbar/TopicsBar";
import CodeAnalize from "../../../public/assets/img/code-analize.webp";
import SolidImg from "../../../public/assets/img/solidp.png"
import Image from "next/image";

export default function GoodCode() {
    return (
        <main>
        <Header/>
        <ContainerDad>
            <ContainerRep>
                <h1 className="text-2xl self-center text-blue-dark border-b-2 pb-2 pl-2 pr-2
          border-black shadow-[4px_3px_4px_2px] shadow-indigo-600">O guia para um bom código</h1>
          <Image src={CodeAnalize} className="rounded-lg w-[90%] h-[350px] self-center mt-3 
          majorfour:h-[250px] midtwo:h-[160px] midtwo:w-[97%] lowtwo2:h-[120px]" alt="programming languages image"/>
          <p className="text-xl mt-2">No mundo do desenvolvimento de software, as boas práticas de código são os pilares que sustentam a 
          robustez e a eficiência de qualquer projeto. Como destacado por Alex Xu, renomado profissional com uma trajetória que inclui
              contribuições para gigantes como Twitter, Apple e Oracle, a excelência no código não é apenas uma preferência, 
              mas sim um alicerce essencial. Neste blog, exploraremos insights valiosos compartilhados por Xu, co-fundador da 
              ByteByteGo e autor de best-sellers, desvendando os segredos por trás de um desenvolvimento sólido e sustentável.</p>

              <h2 className="text-2xl text-purple-700 font-bold mt-2">Seguir especificações e boas práticas de código</h2>
              <p className="text-xl">Quando codificamos algo, é importante seguir algumas normas pré-estabelecidas da indústria, como "PEP 8", "Google Java Style"
                por exemplo, aderindo padrões e especificações estabelecidos que podem dar mais organização, compreensão e até mais segurança á aplicação,
                além de previnir problemas e facilitar manutenções e adaptações futuras no código.
              </p>
              <h2 className="text-2xl text-purple-700 font-bold mt-2">Documentação e comentários</h2>
              <p className="text-xl">Um bom código é documentado e comentado de forma clara e coesa, pra que a a complexidade, lógica e decisões sejam explicadas, comentários
              devem explicar o por que de certas ações, é melhor ser explicado o ("por que"?) do que ("O que?") de certo código. isso também serve pra commits e versionamento.
              </p>
              <h2 className="text-2xl text-purple-700 font-bold mt-2">Robustez e Versatilidade</h2>
              <p className="text-xl">Um bom código também deve ser ábil para lidar com a váriedade e inesperadas situações e inputs sem crashar ou dar resultados não esperados.
              A abordagem mais comum é detectar e lidar com as exceções.
              </p>
              <h2 className="text-2xl text-purple-700 font-bold mt-2">Seguir os princípios SOLID</h2>
              <Image src={SolidImg} alt="solid principles image" className="self-center w-[400px] mt-2 mb-2"/>
              <p className="text-xl">SOLID é um acrônimo de cinco princípios de design de código na programação orientda a objeto("POO") que servem para organização,
              legibilidade e manutenção no desenvolvimento de software. <br /> foi introduzido por Robert C. Martin em um artigo em 2000 e se tornou um conceito muito conhecido
              na área de programação até os dias de hoje.
              </p> <br />
              <h3 className="font-bold text-xl">Agora vamos ver mais sobre os tais princípios:</h3>
                <h2 className="text-2xl text-blue-dark">Single Responsability Principle(Princípio da Responsabilidade única)</h2>
                <p className="font-semibold text-xl">"Uma classe deve ter um, somente um motivo para mudar".</p>
                <p>Caso uma classe tenha muitas responsabilidades, tem mais chances de bugs ocorrerem, pois fazer mudanças em uma das suas responsabilidades pode afetar os outros
                    sem ter noção disso.
                </p>
                <h2 className="text-2xl text-blue-dark">Open/Closed Principle(Princípio aberto/fechado)</h2>
                <p className="font-semibold text-xl">"Classes devem ter abertura para a se expandir, mas não para modificação".</p>
                <p>A mudança de uma responsabilidade atual da classe pode afetar todos os sistemas da classe, se você quer que a classe tenha mais funções o ideal é adicionar funções
                    que já existem e não muda-las, fazendo com que essas funções funcionem mutualmente e eficientemente.
                </p>
                <h2 className="text-2xl text-blue-dark">Liskov Substitution Principle(Liskov Substitution Principle)</h2>
                <p className="font-semibold text-xl">"Quando uma classe filha não faz as mesmas ações que a classe pai, pode resultar em bugs".</p>
                <p>Se você cria uma classe dentro de uma ela se torna a filha, a classe filha deve processar as mesmas requisições e dar o mesmo resultado
                 que a classe pai ou dar um resultado
                do mesmo tipo. <br /> Por exemplo o que é pedido na função pai é esperado qualquer tipo de café, mas imagine que a função child entregue água. <br />
                se a classe criança não coincide nas requisições, ela é completamente mudada e viola este princípio.</p>
                <h2 className="text-2xl text-blue-dark">Interface Segregation Principle(Princípio da Segregação de Interface);</h2>
                <p className="font-semibold text-xl">“Uma classe não deve ser forçada a implementar interfaces e métodos que não utilizará”.</p>
                <p>Quando a classe é requisitada para uma ação que não é utilizada, é um desperdício e pode produzir bugs inesperados se essa classe pode
                    executa essas ações. <br />
                    Ela deve executar apenas funções necessárias que preenchem o todo. Se não for necessário deve ser removida ou movida para outro lugar se tem
                        que ser usada por outra futura classe.
                </p>
                <h2 className="text-2xl text-blue-dark">Dependency Inversion Principle (Princípio da Inversão de Dependência).</h2>
                <p className="font-semibold text-xl">“Dependa de abstrações e não de implementações”.</p>
                <p className="text-xl"><span className="font-bold">Módulo de alto nível(classe):</span> Classe que executa uma ação com alguma ferramenta.</p>
                <p className="text-xl"><span className="font-bold">Módulo de baixo nível(classe):</span> Ferramenta precisada para a execução da ação.</p>
                <p>O princípio aponta que a Classe não pode estar fundida à ferramenta que ela usa pra execução de uma ação. <br />
                considerando isso ela deve estar fundida com a interface que permitirá a ferramenta conectar na classe. Também aponta que classe e interface
                não devem saber como a ferramenta funciona, a ferramenta precisa ser específicada na interface.</p>
                <h2 className="text-2xl text-purple-700 font-bold mt-2">Testar facílmente</h2>
              <p className="text-xl">Testabilidade de software é de suma importância. Um bom código deve ser fácil de testar e ao mesmo tempo tentar reduzir
              a complexidade de cada componente, e com o suporte de testes automizados para a certeza de que tudo ocorre como esperado.
              </p>
              <h2 className="text-2xl text-purple-700 font-bold mt-2">Abstração</h2>
              <p className="text-xl">A abstração de um projeto requer a extração de sua lógica e minimizar a complexidade definindo os melhores caminhos, 
              para um código mais flexível e genérico. <br /> Bom código deve ter certo nível moderado de abstração no meio termo, nem tão superprojetado
            e nem negligênciado em expandibilidade e manutenção em longo termo.
              </p>
              <h2 className="text-2xl text-purple-700 font-bold mt-2">Utilize padrões de design, mas não exageradamente</h2>
              <p className="text-xl">Padrões de design pode nos ajudar com problemas comuns. Porém todo padrão tem seus próprios cenários de aplicação,
              exagerar ou utilizar mal pode tornar o código complexo demais e pouco legível, princípalmente em trabalho em grupo.
              </p>
              <h2 className="text-2xl text-purple-700 font-bold mt-2">Reduzir Dependências Globais</h2>
              <p className="text-xl">Podemos as vezes ser atolados em dependências e confundir gerenciamento de estado se usarmos variáveis e instancias 
              globais. Um bom código deve funcionar no seu devido local e parâmetro passado, funções devem evitar ao máximo efeitos colaterais.
              </p>
              <h2 className="text-2xl text-purple-700 font-bold mt-2">Refatoramento contínuo</h2>
              <p className="text-xl">Um bom código é de bom mantimento e extensibilidade. Contínuo refatoramento reduz problemas futuros identificando
               e concertando seus problemas o mais cedo possível.
              </p>
              <h2 className="text-2xl text-purple-700 font-bold mt-2">Segurança de prioridade máxima</h2>
              <p className="text-xl">Fundamental mencionar, bom código deve evitar vulnerabilidades de segurança, especialmente para aplicações
              envolvendo finanças, deve ser livre de injeção SQL, ataques cross-site scripting(XSS) e interceptação de dados. 
              </p>
                <br /> <br />
            <p className="text-2xl">E por fim espero ter ajudado atravez do compartilhamento das falas de Alex Xu, um programador de excelência que deve ser seguido
                como exemplo, pela sua experiência, conhecimento e força de vontade ao também passar conhecimento para outros da área, um bom código
                na minha opinião resumidaente deve funcionar do jeito esperado, adaptável, seguro e com menos complexidade possível.
            </p>
            </ContainerRep>
            <TopicsBar/>
        </ContainerDad>
        <ScrollUpBtn/>
        </main>
    );
}