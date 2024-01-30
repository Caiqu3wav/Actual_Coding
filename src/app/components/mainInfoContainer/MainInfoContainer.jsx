import "./MainInfoContainer.css"

export default function MainInfoContainer() {
    return (
        <div className="main-info-cont w-[70%] h-[260px] pt-8 pb-2 mt-4 flex flex-col items-center self-center rounded-2xl
        border-2 border-sky-500 shadow-[4px_3px_12px_2px] shadow-indigo-600 major:h-fit major:pb-[20px] majortwo:pt-12
        midtwo:w-[90%]">
            <h1 className="text-blue-dark font-bold text-2xl majortwo: ml-2 midtwo:text-[20px]">Você quer ficar por dentro do cenário atual do mundo da programação?</h1>
            <div className=" w-[80%]"><p className="midtwo:text-[14px]">Actual Coding tem a intenção de ser uma fonte de informação sobre tecnologia, se você tem interesse
                ou é um profissional de tecnologia sabe que este cenário é complexo e está sempre em mutação e evolução. Entretanto 
                se você ficar desatualizado você fica pra traz, enquanto uns ficam pra frente, se você está aqui procurando informação,
                 presumo que é uma pessoa dedicada e gosta do que faz, este site é de profissional pra profissional, ao mesmo
                que você sai ganhando por adquirir informação eu saio ganhando por obter e passar informação e entrar em prática com 
                projetos, a melhor maneira de evoluir.</p>
            </div>
        </div>
    );
}