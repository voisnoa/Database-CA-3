// src/components/EventForm.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

function EventForm(onAdd) {

    const [event,setEvent] = useState("")
    const [date,setDate] = useState("")
    const [location, setLocation] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        onAdd(event,date,location)
        setEvent("")
        setDate("")
        setLocation("")
    }

    return (
        <>
            {/* Event form */}
            <form onSubmit={handleSubmit}>
                <h2>Event</h2>
                <input type="text"  value={event} placeholder="enter Event" name="enter Event" id="" onChange={(e) => setEvent(e.target.value)} />
                <h2>Date</h2>
                <input type="date" value={date} name="enter date" id="" onChange={(e) => setDate(e.target.value)} />
                <h2>Location</h2>
                <input type="text" value={location} name="enter text" id=""onChange={(e) => setLocation(e.target.value)} />

                <br />
                <button><Link to="/">Submit</Link></button>
            </form>
        </>
    );
}

export default EventForm;
