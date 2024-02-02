const blogs = [
    {id: 1, nome: "Linguagens de programação atualidade(2024)", 
    descr: "O blog aborda o dinâmico cenário das linguagens de programação em 2024, oferecendo insights valiosos sobre as escolhas mais relevantes para desenvolvedores.",
    imagem: "/assets/img/programming-languages.jpg", dataLnc: '2024/01/29', link: "/actullanguages"
},{id: 2, nome: "Inteligência Artificial na T.I: Transformando o Desenvolvimento de Software", 
descr: "Descubra como a inteligência artificial (IA) está revolucionando a programação, atuando como um 'segundo par de olhos' para os desenvolvedores.",
imagem: "/assets/img/artificiaal-inteligence-computing.jpg", dataLnc: '2024/02/01', link: "/ia"
},{id: 3, nome: "Desvendando o Mundo da Organização de Dados", 
descr: "Explore o fascinante universo dos bancos de dados, fundamentais na era digital, onde informações cruciais são organizadas, recuperadas e gerenciadas.",
imagem: "/assets/img/databasesrepresentations.jpg", dataLnc: '2024/02/02', link: "/bancos_de_dados"
},
];

export async function GET(request: Request) {
    return new Response(JSON.stringify(blogs), {
      headers: { 'Content-Type': 'application/json' },
    });
  }