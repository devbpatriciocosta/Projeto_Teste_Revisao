import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function HomePage() {
  const handleLabelClick = () => {
    console.log('Handle Label Click')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('Handle Submit Form')
  }

  let email = ''

  const handleChangeInput = (event) => {
    email = event.target.value
    console.log('Email dentro do handle: ', email)
  }

  console.log('email:', email)

  return (
    <>
      <Title>Login Page</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input type="text" placeholder="Username" onChange={handleChangeInput} />
        <p>O e-mail digitado foi: {email}</p>
        <Input type="password" placeholder="Password" onChange={handleChangeInput} />
        <Button type="submit">Botão dentro do form</Button>
      </form>
      <Button onClick={handleLabelClick}>Botão fora do form</Button>
      <label>LABEL TESTE</label>
      <button>Botão teste</button>
    </>
  )
}
