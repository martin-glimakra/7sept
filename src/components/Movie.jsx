import Seat from "./Seat";

export default function Movie({ movie, setMarked, marked }) {

    return (
        <div>
            {movie.title}
            {movie.seats.map(seat => <Seat
                seat={seat}
                marked={marked}
                setMarked={setMarked}
            />
            )}
        </div>
    )
}