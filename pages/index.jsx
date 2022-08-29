import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function HomePage() {
  const handleLabelClick = () => {
    console.log('Handle Label Click')
  }
  return (
    <>
      <Title>Login Page</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Botão</Button>
      </form>
      <label>LABEL TESTE</label>
      <button>Botão teste</button>
    </>
  )
}
