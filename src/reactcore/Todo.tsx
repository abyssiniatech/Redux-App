import { useState } from "react"

const Todo = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todo.trim() === '') return
    setTodos([...todos, todo])
    setTodo('')
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={todo}
          onChange={handleInput}
          className="border p-2 flex-1"
          placeholder="Add todo"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      <ul className="mt-4">
        {todos.map((list, index) => (
          <li key={index} className="p-2 border-b">
            {list}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
