import  { useState } from "react";
type carprops = {
   name:string,
   year:number,
   color:string
   
}



const Usestate = () => {
  const [show,setShow]  = useState(true)
  const [car,setCar] = useState<carprops>({
    name:"toyota",
    year:2026,
    color:"red"
  })

const handlecar =() =>{
  setCar({
    name:"Suzuki",
    year:2026,
    color:"gold"
  })
}

const handleshow =() =>{
  setShow(
    show =>!show
  )
}

  return (
    <div className="bg-indigo-900 text-white flex h-screen flex-col justify-center items-center">
          {
            show &&
            <div>
              <p className="text-4xl m-5">My car</p> 
              <p>{car.name}</p>
              <p>{car.year}</p>
              <p>{car.color}</p>
           </div>
          }
       <button className="bg-teal-400 text-white px-8 py-4 rounded text-3xl border-0 " onClick={handlecar}>Change car</button>
         <button className="bg-pink-900 text-white rounded mt-4 px-6 py-2 text-3xl" onClick={handleshow}>{show ? "Hide" : "Hide"}</button>
    </div>
  )
};

export default Usestate;