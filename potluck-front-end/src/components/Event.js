// import React, { useEffect, useState } from 'react';
// import Potluck from './Potluck';
// import { axiosWithAuth } from '../utils/axiosWithAuth';


// const EventCard = () => {
//     const {name, date, time, location, guests, items } = potluckEvent
//     const { potluck_id } = potluckEvent //to define the id

//     const [localEvents, setLocalEvents] = useState('')

//     useEffect(() =>{
//         axiosWithAuth().get(`/data/${potluck_id}`)
//             .then(res=>{
//                 setLocalEvents(res.data);
//             })
//             .catch(err=>{
//                 console.log(err);
//             })
//     }, [potluck_id])

//     return(
//         <div className="event-container">
//             <h3>Potluck Host: {name}</h3>
//             <p>held on: {date} {time}</p>
//             <p>{location}</p>
//             <p>attending: {guests}</p>
//             <div className="items-container">
//                 Items needed: {items}
//             </div>

//         </div>
//     )
// }

// export default EventCard;