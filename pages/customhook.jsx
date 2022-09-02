import useFetch from '../src/hooks/useFetch'

export default function CustomHookPage() {
  const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h4>Exemplo de HOOK customizado</h4>
      {loading && <p>Calma, carita...</p>}
      {data?.map(({ id, name }) => (
        <div key={`item-${id}`}>{name}</div>
      ))}
    </div>
  )
}
