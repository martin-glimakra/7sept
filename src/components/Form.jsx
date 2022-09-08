
export default function Form({firstName, setFirstName}) {
  return (
    <div>
        <input 
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="skriv ditt förnamn här"
        />
        <p>{firstName}</p>
    </div>
  )
}
