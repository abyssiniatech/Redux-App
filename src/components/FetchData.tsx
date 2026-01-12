import { useEffect, useState } from "react";
type photoprops ={
    id:number,
    title:string,
    url:string
    thumbnailUrl:string
}
const url="https://jsonplaceholder.typicode.com/photos"
const FetchData = () => {
    const [data,setData] = useState<photoprops[]>([]);
    useEffect(() =>{
       setTimeout(() => {
          const Fetchdata=async() =>{
            const res= await fetch(url)
            const data =await  res.json()
            setData(data)
            console.log(data)
          }
          Fetchdata()
       }, 2000);
    },[])
  return (
    <div>
        {
            data.map((list,index)=>{
                return(
                    <div key={index}>
                        <section className="border border-gray-400 bg-gray-200">
                            <li>{list.id}</li>
                            <li>{list.title}</li>
                            <li>{list.url}</li>
                            <li>{list.thumbnailUrl}</li>
                     </section>
                    </div>
                )
            })
        }
    </div>
  )
};

export default FetchData;