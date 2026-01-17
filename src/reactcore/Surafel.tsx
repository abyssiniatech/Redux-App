
type nameprop={
  name:string
  age:number
  email:string
  pro:React.ReactNode
}
const Surafel = (props:nameprop) => {
  return (
    <div>
      <h1>my  name is  {props.name}</h1>
       <p>my email is :{props.email}</p>
       <p>my email is :{props.age}</p>
       {props.pro}
    </div>
  )
}

export default Surafel
