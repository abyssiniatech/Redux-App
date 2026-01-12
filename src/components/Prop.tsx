type Storsprop={
  name:string
  age:number
  email:string
  user:string[];
  isRegister:boolean
}

const Lab1 = ({name,age,email,isRegister,user}:Storsprop) => {
  return (
    <div>
        <Header />
      <p>my name is {name}</p>
      <p>my name is {age}</p>
      <p>my name is {email}</p>
      <p>my name is {isRegister}</p>
      {user.map((frainds,index) =>{
        return(
            <div key={index}>
                <h1>{frainds}</h1>
            </div>
        )
      })}
      <Main />
      <hr />
      <Jsxrule />
      <Lab2 />
 <Footer />
    </div>
  )
};

export default Lab1;





const Header=()=>{
    return <h1>Welcome  to my website</h1>
}



const Main =() =>{
    return<div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis libero illum ducimus, nihil maiores necessitatibus distinctio? Quisquam cupiditate necessitatibus blanditiis exercitationem soluta expedita, doloremque tempora aliquam ut quasi, earum quas.</p>
        </div>
}
  const Footer= () =>{
    return <h2>&copy;{new Date().getFullYear()}</h2>
  }



//   jsx rule.jsx
const Jsxrule = () =>{
    return (
        <div>
            <h1>Jsx Rules</h1>
            <p className="welcomwe">welcome to my jorny</p>
        </div>
    )
}




const Lab2 =() =>{
    return(
        <section>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error facere, aut, dolore in, doloribus repellendus id ratione voluptatem tempora reprehenderit ut similique dicta vitae inventore veniam illum voluptas beatae? Aliquam!</p>
           <footer>
            <h2>Copy &copy;{new  Date().getFullYear()}</h2>
           </footer>
        </section>
    )
}