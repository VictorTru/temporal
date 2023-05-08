
import { psicologicoData } from '../apis/psicologicoData.js'
import Psicologico from '../pages/Psicologico.jsx'

const PsicologicoComponent = () => {
  
      
    const cards = psicologicoData.map((pro,i) => {
     return <Psicologico pro={pro} key={i}/>
      
});
  return <div>{cards}</div>
};
    

export default PsicologicoComponent;