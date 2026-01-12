import { useEffect,useState } from "react";
type Post = {
  id: number;
  title: string;
  body: string;
};
const Url="https://jsonplaceholder.typicode.com/posts"
const UseEffect = () => {
  const [data,setdata] =useState<Post[]>([])
   useEffect(()=>{
      const Fetchdata = async() =>{
         const res=await fetch(Url)
         const data=await res.json()
        setdata(data)
      }

    
      Fetchdata()
    },[])
  return (
    <div>
        {
           data.map((list)=>{
            return(
              <div key={list.id}>
                <ul className="bg-gray-100 border border-gray-400 p-4 m-2 ">

                <li>{list.id}</li>
                <li>{list.title}</li>
                <li>{list.body}</li>
                </ul>
              </div>
            )
           })

        }
    </div>
  )
};

export default UseEffect;