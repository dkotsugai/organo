import "./Botao.css";

const Botao = (props) => {
  return (<button className="botao">
        {props.children}
    </button>
    ) // Retornando o JSX do componente Botao
};

export default Botao; // Exportando o componente Botao
