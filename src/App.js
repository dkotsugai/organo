import CampoTexto from "./componentes/CampoTexto"; // Importando o componente CampoTexto
import Banner from "./componentes/Banner/"; // Importando o componente Banner

function App() {
  return (
    <div className="App">
      <Banner /> {/* Renderizando o componente Banner */}
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
      <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
    </div>
  );
}

export default App;
