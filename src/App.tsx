import Surafel from "./reactcore/Surafel"
import AdvanceProp from "./AdvanceProp"

const App = () => {
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
      />
     
    </div>
  )
}

export default App
