import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import ListaSuspensa from "../ListaSuspensa";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-end",
    "Back-end",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Email" placeholder="Digite seu email" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
        <ListaSuspensa label="Time" itens={times} />
        <Botao>
            Criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario; // Exportando o componente Formulario
