import { useContext } from "react"
import { IncrementContext } from "./IncrementContext"

const IncrementContextChild = () => {
  const context = useContext(IncrementContext)

  if (!context) return null

  const { count, increment } = context

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-3xl">{count}</p>
      <button
        onClick={increment}
        className="px-6 py-3 bg-indigo-600 text-white rounded"
      >
        Increment
      </button>
    </div>
  )
}

export default IncrementContextChild
