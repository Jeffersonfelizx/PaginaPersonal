import Java01 from '../../assets/img/paginaInicial/Generation/Java-01.png'
import RESILIA from '../../assets/img/paginaInicial/Resilia/RESILIA.png'
import Main1 from '../../assets/img/paginaInicial/Main1.jpg'

function Index() {
  return (
    <>
    <div>
      <div className="container-apresentacao">
        <div className="container-img">
           <img src={Main1} alt=""/>
        </div>
        <div className="container-bemvindos">
            <h1 >Olá, Meu</h1>
            <h1> nome é <i>Jefferson Felix</i></h1>
            <h2>Sou um estudante e desenvolvedor web com experiência em programação <i className="auto-type">Full-Stack</i></h2>
        </div>
    </div>
    <div className="container-minhaformacaoh1">
    <span>Minha Formação
    </span>

</div>
    <div className="container-minhaformacao">
        <a href="https://brazil.generation.org" target="_blank"><h2><i>Generation Brasil</i></h2></a>
     <div className="container-minhaformacao-bloco1">
        <div className="generation-aprendizado">
            <h2>O que Aprendi na formação de Java FullStack? </h2>
            <h4><span>Hard Skills: </span>
                Java, Spring Boot, React, HTML <br/>CSS, Git, Tailwindcss e muitos outros.</h4>
            <h4><span>Soft Skills: </span> Comunicação, Gestão de tempo e rotina,<br/>Mentalidade, Inteligência Emocional, Resolução de problemas e muito mais.</h4>
            <button>Projetos Criados na Generation</button>
        </div>
        <div className="generation-img" >
            <img src={Java01} alt="Generation Imagem"/>
        </div>
     </div>
    </div>
    <div className="container-minhaformacao">
        <a href="https://www.resilia.com.br/" target="_blank"><h2><i>Resilia Educação</i></h2></a>
     <div className="container-minhaformacao-bloco1">
        <div className="generation-img">
            <img src={RESILIA} alt="Resilia imagem"/>
        </div>
        <div className="generation-aprendizado">
            <h2>O que Aprendi na formação de Data Analytics? </h2>
            <h4><span>Hard Skills:</span>
                Python, Bancos relacionais e não relacionais, Pandas, 
                <br/>
                Visualização de dados com Python: Plotly e Seaborn,<br/>
                Análise e tratamento de dados para análise exploratória,
                Introdução ao Tableau</h4>
            <h4><span>Soft Skills</span> Comunicação, Gestão de tempo e rotina,<br/>Mentalidade, Inteligência Emocional, Resolução de problemas e muito mais.</h4>
            <button >Projetos Criados na Resilia</button>
        </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default Index;
