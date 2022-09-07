
export default function Seat({seat, marked, setMarked, movie }) {

    let isMarked = marked.filter(id => id === seat.id)

    return (
        <div className={isMarked.length ? 'marked' : 'not'}>
            <h3>{seat.name}</h3>
            {seat.booked ? <div>
                {seat.id} är bokad</div> :
                <div>{seat.id}
                    <button onClick={() => setMarked([
                        ...marked, seat.id
                    ])
                        }>Markera!</button>
                </div>}
        </div>
    )
}
