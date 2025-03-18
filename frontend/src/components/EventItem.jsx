//EventItem Component

import React from 'react'

const EventItem = (eventt) => {
  return (
    <div>
        <h1>{eventt.name}</h1>
        <h2>{eventt.date}</h2>
        <h3>{eventt.location}</h3>
    </div>
  )
}

export default EventItem