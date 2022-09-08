
export default function Seat({ seat, marked, setMarked }) {

    let isMarked = marked.filter(stefan => stefan === seat.id)


    function handleClick (id) {
        if (marked.filter(number => number === id).length) {
            console.log('if')
            let newState = marked.filter(remove => remove != id)
            setMarked(newState)

            
        }
        else {
            console.log('else')
            setMarked([...marked, id])

        }
    } 

    console.log(marked)



    return (
        <div className={isMarked.length ? 'marked' : 'not-marked'}>
            <h3>{seat.name}</h3>
            {seat.booked ? <div>är bokad</div> : <button onClick={() => handleClick(seat.id)}>markera</button>}
        </div>
    )
}
