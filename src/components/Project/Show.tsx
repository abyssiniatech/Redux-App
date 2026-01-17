import { useState } from "react"

const Show = () => {
    const [show,setShow] = useState(true)
    const handleShow =()=>{
        setShow((show) =>!show)
    }
  return (
    <div className="bg-indigo-900 text-white ">
     <section>
        {
            show && 
         <header className="w-[50%] m-auto border border-gray-400 p-12">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo sapiente ex quasi, tenetur dolor accusantium eligendi harum atque dicta eaque velit omnis ullam aspernatur cupiditate, at laudantium corrupti cumque soluta?</p>
            <button>Add</button>
         </header>
            
}
         <button onClick={handleShow}className="bg-teal-600 text-white px-4 py-2 rounded flex justify-center items-center w-30 text-center">{show ? "Hide":"Show"}</button>
     </section>
    </div>
  )
}

export default Show
