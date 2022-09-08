let dateObject1 = {
    date: 'tisdag',
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

let dateObject2 = {
    date: 'måndag',
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

let dateObject3 = {
    date: 'måndag',
    seats: [
        {
            name: 'frontseat',
            id: 5,
            booked: true
        },
        {
            name: 'backseat',
            id: 6,
            booked: false
        }
    ]
}

let dateObject4 = {
    date: 'onsdag',
    seats: [
        {
            name: 'frontseat',
            id: 7,
            booked: true
        },
        {
            name: 'backseat',
            id: 8,
            booked: false
        }
    ]
}


let movie1 = {
    title: 'djungelgeorge 1',
    dates: [
        dateObject1, dateObject2
    ]
}

let movie2 = {
    title: 'djungelgeorge 2',
    dates: [
        dateObject3, dateObject4
    ]
}

export let dbExample = [
    movie1, movie2
]