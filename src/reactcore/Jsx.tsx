// thre are some rules of jsx
// 1. inside the render method only render single elements 
// 2. instead of class we can use classname 
// 3. instead of  in the label element for  to convret to htmlGot 
//  
const Jsx = () => {
  return (
    <div className="bg-indigo-900 text-white  flex screen justify-center items-center h-screen">
        <h1>Jsx basics </h1>
        <form>
            <label htmlFor="Name"></label>
            <input type="text"   id="name" placeholder="enter your name "/>
            <button className="bg-pink-700 px-4 py-2 m-2 text-3xl">Add</button>
         </form>
    </div>
  )
}

export default Jsx
