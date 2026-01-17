import { useState } from "react"

const ColorChanger = () => {
  // state to store current bg color
  const [bgColor, setBgColor] = useState("bg-white")

  // function to handle color change
  const changeColor = (color: string) => {
    setBgColor(color)
  }

  return (
    <div className={`${bgColor} h-screen flex flex-col items-center justify-center`}>
      <h1 className="text-2xl mb-6 text-center text-white ">Change background color</h1>
      <div className="flex gap-4">
        <button
          onClick={() => changeColor("bg-red-500")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Red
        </button>
        <button
          onClick={() => changeColor("bg-green-500")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Green
        </button>
        <button
          onClick={() => changeColor("bg-blue-500")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Blue
        </button>
        <button
          onClick={() => changeColor("bg-yellow-300")}
          className="px-4 py-2 bg-yellow-300 text-black rounded"
        >
          Yellow
        </button>
        <button 
        onClick={()=> changeColor("bg-teal-600")}
        className="bg-teal-300 text-white px-4 py-2">
            black
        </button>
      </div>
    </div>
  )
}

export default ColorChanger
