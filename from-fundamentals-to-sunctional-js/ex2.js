const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];
const emptyRoom = (newDevelopment) => {
    //take the first rooms that are false
    var erArr = er(newDevelopment);

    //loop through the rest of the candidates 
    //check if the keys are true, if so remove
}

const er = function (suspect) {
let emptyRooms = [];
 _.filter(suspect.rooms, function(room) {
     for (let [key, value] of Object.entries(room)){
       if(value === false){ emptyRooms.push(key)}   
     }
});
return emptyRooms;
}

const notInRooms = _.map(newDevelopment, er)

_.intersection(...notInRooms);


const notInRoom = (suspect) => {
    const emptyRooms = _.reduce(suspect.rooms, (memo, room) => {
        console.log(`${suspect.name}'s empty room-rooms: ${room}`);
        for (let [key, value] of Object.entries(room)){
            console.log(`${suspect.name}'s empty room-room: ${room}`);
            console.log(`${suspect.name}'s empty room-key: ${key}`);
            console.log(`${suspect.name}'s empty room-value: ${value}`);
            if(value === false) {
                memo.push(key)
                console.log(`${suspect.name}'s empty room: ${key}`);
            }
        }
        //return memo;
        return memo;
    }, [])
    console.log(`${suspect.name}'s empty rooms: ${emptyRooms}`)
    return emptyRooms;
};

const notInRooms = _.map(newDevelopment, notInRoom)

_.intersection(...notInRooms);



const notInRoom = (suspect) => {
    const emptyRooms = _.reduce(suspect.rooms, (memo, room) => {
        for (let [key, value] of Object.entries(room)){
            if(value === false) {
                memo.push(key)
            }
        }
        return memo;
    }, [])
    return emptyRooms;
};

const notInRooms = _.map(newDevelopment, notInRoom)

_.intersection(...notInRooms);