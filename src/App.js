
import Card from "./Components/Card/Card"
import Data from "./Utils/Data"



function App() {

  return (
    <>
      {Data.map((item,index)=>{ 
        const {id, language, img, btnName} = item
        
        return (<Card key={index} language={language} img={img} btnName={btnName} />)

      })}
    
    </>

  );
}

export default App;
