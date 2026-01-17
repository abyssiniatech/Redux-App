type studentProp={
    name:string,
    department:string,
    id:number,
    

}
const AdvanceProp = (props:studentProp) => {
  return (
    <div>
       <h1>Advanced props</h1>
       <p>{props.id}</p>
       <p>{props.name}</p>
       <p>{props.department}</p>
       
       

    </div>
  )
}

export default AdvanceProp
