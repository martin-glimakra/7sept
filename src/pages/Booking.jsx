import { useState, useEffect } from 'react';
import Form from '../components/Form';
import Movie from '../components/Movie';

export default function Booking() {

    //här ska API requests göras
    useEffect(() => {
        fetchData()
    }, [])
    
    //funktionen fetchData() behöver inte ligga inom useEffect så länge den kallas på inom useEffect
    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        //setState får inte ligga direkt i Booking() komponenten
        setApiData(data)
    }

    const [apiData, setApiData] = useState()


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
    const [firstName, setFirstName] = useState()



    return (
        <div>
            {/* Hämta testdata från ett API. Eftersom apiData från början är undefined behövs '?' */}
            {/* {apiData ? apiData.map(variabelnamn => <div key={variabelnamn.id}>{variabelnamn.id}</div>) : <div>Laddar</div>} */}

            {fakeDb.map((movie) => <Movie
                movie={movie}
                marked={marked}
                setMarked={setMarked}
            />)}

            Här är formuläret:
            <Form firstName={firstName} setFirstName={setFirstName} />
            <button onClick={() => console.log('marked', marked, 'firstName', firstName)}>Boka</button>
        </div>
    )
}
