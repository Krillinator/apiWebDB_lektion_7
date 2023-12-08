"use client"
import { FormEvent, useState } from "react"

interface Student {
  name: string
}

export default function Home() {
  const [username, setUsername] = useState<string>("")
  const [student, setStudent] = useState<Student>({ name: "" })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setStudent({ name: username })
  }

  return (
    <>
      <div>
        <h1>{student.name}</h1>
        <form onSubmit={handleSubmit}>
          <p>username:</p>
          <input
            className="text-black"
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value)
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
