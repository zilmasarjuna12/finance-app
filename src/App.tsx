import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Vite + React + Tailwind CSS</h1>
        <p className="text-lg mb-8">Count is: {count}</p>
      </div>
    </>
  )
}

export default App
