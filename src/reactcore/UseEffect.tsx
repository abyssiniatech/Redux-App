import { useEffect, useState } from "react"
type main={
    id:number,
    title:string
    body:string
}

const tit="surafel"
const UseEffect = () => {
    const [data,setData] = useState<main[]>([])
      useEffect(() =>{
        document.title =`welcome ${tit}`
        setTimeout(() =>{
            const Featchdata=async()=>{
                const res= await fetch("https://jsonplaceholder.typicode.com/posts");
                const data=await res.json();
                setData(data)
            } 
              Featchdata()
        },2000)
      },[])
  return (
    <div className="bg-gray-50  flex justify-center items-start  flex-col">
        <header className="flex items-center justify-between bg-indigo-700 text-white p-12 text-2xl w-full">
            <h1>My website </h1>
            <nav className="flex justify-center items-center gap-4 ">
                <a href="#">About</a>
                <a href="#">Product</a>
                <a href="#">Contact us </a>
            </nav>
            <aside>user</aside>
        </header>
     <main>
         {
            data.map((lis:main) =>{
                return(
                    <div key={lis.id} className="bg-gray-100 border border-gray-400 p-2 m-2 rounded ">
                        <ul className="hover:bg-gray-50">
                            <li>{lis.id}</li>
                            <li>{lis.title}</li>
                            <li>{lis.body}</li>
                        </ul>
                    </div>
                )
            })
         }
     </main>
     <footer className="bg-indigo-900 text-white p-6 w-full text-center">
        <h2>&copy;{new Date().getFullYear()}</h2>
     </footer>
    </div>
  )
}

export default UseEffect
