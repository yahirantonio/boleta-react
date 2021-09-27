import { PoliticalGroups } from "./components/PoliticalGroups";
import { Titulo } from "./components/Titulo";
import { Ubicacion } from "./components/Ubicacion";
import { Vote } from "./components/Vote";

function App() {

  const dataVote = [];

  const handleClick = () =>{
    console.log(dataVote)
    console.log("tu votaste por : ")
    dataVote.forEach(value=>{
      console.log(`Votaste por el candidato: ${value.candidato} \n por el partido ${value.partido}`)
    })
  }
  
  return (
    <div className="marco">
      <Titulo fecha={"2017-2018"} />
      <Ubicacion />
      <PoliticalGroups dataVote={dataVote}/>
      <Vote handleClick={handleClick}/>
    </div>
  );
}

export default App;
