import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';

function App() {

  let film1 = {
    title: 'starWars',
    seats: [
      {
        name: 'frontseat',
        id: 1,
        booked: true
      },
      {
        name: 'backseat',
        id: 2,
        booked: false
      }
    ]
  }

  let film2 = {
    title: 'dieHard',
    seats: [
      {
        name: 'frontseat',
        id: 3,
        booked: true
      },
      {
        name: 'backseat',
        id: 4,
        booked: false
      }
    ]
  }


    let fakeDb = [
      film1, film2
    ]

    const [marked, setMarked] = useState([])


  return (
    <div>
      {fakeDb.map((movie) => <Movie 
        movie={movie} 
        marked={marked}
        setMarked={setMarked}
      />)}
      <button onClick={() => console.log('marked', marked)}>kör</button>
    </div>
  );
}
    

//   return (
//     <div>
//       {fakeDb.map(movie => <div>
//         <h2>{movie.title}</h2>

//         {movie.seats.map(seat => {
//           return <div>
//             <h3>{seat.name}</h3>
//             {seat.booked ? <div>{seat.number} är bokad</div> : <div>{seat.number} <button onClick={() => handleClick(seat)}>Boka!</button></div>}
//           </div>

//         })}
//       </div>)}
//     </div>
//   );
// }

export default App;
