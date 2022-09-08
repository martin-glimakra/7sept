
export default function Seat({ seat, marked, setMarked }) {

    let isMarked = marked.filter(stefan => stefan === seat.id)


    return (
        <div className={isMarked.length ? 'marked' : 'not-marked'}>
            <h3>{seat.name}</h3>
            {seat.booked ? <div>är bokad</div> : <button onClick={() => setMarked([...marked, seat.id])}>markera</button>}
        </div>
    )
}
