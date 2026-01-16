import Surafel from "./reactcore/Surafel"
import AdvanceProp from "./AdvanceProp"
import Counter from "./reactcore/Counter"
import { counterProp } from "./reactcore/Counter"
const App = (props:counterProp) => {
   const [count,setCount] = useState<number>(0);
    const handleInc =()=>{
        setCount(prev=>prev+1)
    }
  return (
    <div>
      <Surafel 
      name="surafel"  
      age={23}
      email="surafel@gmail.com"
    
      pro={ <AdvanceProp
          id={1}
           name="abel"
           department="computer science"
        />}
        count={
          <Counter />
        } 
      />
     
    </div>
  )
}

export default App
