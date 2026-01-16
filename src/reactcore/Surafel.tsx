
type nameprop={
  name:string
  age:number
  email:string
}
const Surafel = (props:nameprop) => {
  return (
    <div>
      <h1>my  name is  {props.name}</h1>
       <p>my email is :{}</p>
    </div>
  )
}

export default Surafel
