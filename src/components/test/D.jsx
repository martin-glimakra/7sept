export default function D({ dateObject }) {

  return (
    <div>
        {dateObject.date}
        {dateObject.seats.map(seat => <div>{seat.name}</div>)}
    </div>
  )
}
