import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function useEffectPage() {
  const [UserList, setUserList] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('Componente inicializado')
  }, [])

  useEffect(() => {
    async function fetchData() {
      const request = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await request.json()
      setUserList(data)
    }

    fetchData()

    return function saveData() {
      console.log('Save Data')
    }
  }, [])

  useEffect(() => {
    console.log('Lista modificada')
  }, [UserList])

  useEffect(() => {
    const wheelListener = () => {
      console.log('Wheel Listener')
    }

    addEventListener('wheel', wheelListener)

    return () => {
      removeEventListener('wheel', wheelListener)
    }
  }, [])

  const handleForm = (event) => {
    event.preventDefault()
    setUserList([
      ...UserList,
      {
        name
      }
    ])
    setName('')
  }

  return (
    <div>
      {UserList.map((user, key) => (
        <div key={`user-${key}`}>{user.name}</div>
      ))}
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      <div>
        <Link href="/">Salvar tudo!</Link>
      </div>
    </div>
  )
}
