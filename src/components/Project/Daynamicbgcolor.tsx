import { useState } from "react"
import { colors } from "./colors"
const RandomBgColor = () => {
  const [bgColor, setBgColor] = useState<string>("bg-white")

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setBgColor(randomColor)
  }

  return (
    <div className={`${bgColor} h-screen flex flex-col items-center justify-center transition-colors duration-500 bg-indigo-700 text-white`}>
      <h1 className="text-2xl mb-6 text-white">Click the button to change background color</h1>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
      >
        Change Bg Colors
      </button>
    </div>
  )
}

export default RandomBgColor
