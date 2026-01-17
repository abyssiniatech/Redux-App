import { useState } from "react"

type ObjProp = {
  name: string
  age: number
  isStudent: boolean
}

const StudentObject = () => {
  const [color, setColor] = useState<string>("red")

  const [student, setStudent] = useState<ObjProp>({
    name: "Aster",
    age: 23,
    isStudent: true,
  })

  const handleChange = () => {
    setStudent({
      name: "Abel",
      age: 12,
      isStudent: true,
    })
  }

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  return (
    <div className="h-screen bg-indigo-900 text-white flex justify-center items-center flex-col">
      <section className="bg-indigo-600 m-2 text-center text-3xl rounded px-20 py-10">
        <p>{student.name}</p>
        <p>{student.age}</p>
        <p>{student.isStudent ? "welcome" : "invalid input"}</p>

        <input
          type="text"
          onChange={handleColor}
          placeholder="enter info"
          className="bg-gray-50 p-2 text-gray-800 rounded"
        />

       {color=="red"?<p style={{color:"red",border:"1px solid black",margin:"4px", borderRadius:"5px"}}>{color}</p> : <p style={{color:"yellow",border:"2px solid black",margin:"4px", borderRadius:"5px"}}>{color}</p>} 

        <button
          onClick={handleChange}
          className="bg-green-900 text-white rounded px-6 py-2"
        >
          Change
        </button>
      </section>
    </div>
  )
}

export default StudentObject
