// src/components/EventList.jsx


import { useEffect, useState } from "react";

import Eventitem from "./EventItem"
import axios from "axios"


function EventList() {

    const [event,setEvent] = useState([])

    useEffect(() =>{
        const Event = axios.get("http://localhost:5000/events")
        setEvent(Event)
        console.log(Event)
    },[])
    
    return(
        <>
            {/* Event list */}

            {
            //    event.map((e) =>{
            //     return <EventItem key={e.id} eventt={e}/>
            //    })
            }   

        </>
    );
}

export default EventList;
