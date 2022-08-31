import { useRef } from 'react'

import Input from '../src/components/input/Input'

export default function UseRefPage() {
  const numero = useRef(10)
  const inputRef = useRef(null)
  const componentInputRef = useRef(null)

  return (
    <>
      <div>
        <h4>UseRef Exemplo</h4>
        <p>Número: {numero.current}</p>
      </div>
      <div>
        <h4>Exemplo com referência no input do HTML:</h4>
        <input type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Foco no input</button>
      </div>
      <div>
        <h4>Exemplo com referência no input component</h4>
        <Input type="text" ref={componentInputRef} />
        <button onClick={() => componentInputRef.current.focus()}>Foco no input</button>
      </div>
    </>
  )
}
