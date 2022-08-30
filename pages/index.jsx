import { useState } from 'react'

import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLabelClick = () => {
    console.log('Handle Label Click')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('Handle Submit Form')
    console.log({ email, password })
  }

  const handleChangeInput = (event, onChange) => {
    onChange(event.target.value)
  }

  return (
    <>
      <Title>Login Page</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input
          type="text"
          placeholder="Digite aí teu e-mail"
          onChange={(e) => handleChangeInput(e, setEmail)}
        />
        <p>O e-mail digitado foi: {email}</p>
        <Input
          type="password"
          placeholder="Manda a senha pra nois"
          onChange={(e) => handleChangeInput(e, setPassword)}
        />
        <Button type="submit">Botão dentro do form</Button>
      </form>
      <Button onClick={handleLabelClick}>Botão fora do form</Button>
      <label>LABEL TESTE</label>
      <button>Botão teste</button>
    </>
  )
}
