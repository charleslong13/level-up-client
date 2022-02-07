import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getEvents } from "./EventManager.js"

export const EventList = (props) => {
    const [events, setEvents] = useState([])
    const history = useHistory()
    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/events/new" })
                }}
            >Register New Event</button>
            <article className="events">
                {
                    events.map((event) => {
                        return (
                            <section key={`game--${event.id}`} className="event">
                            <div className="event__game">{event.game.title}</div>
                            <div className="event__description">{event.description}</div>
                            <div className="event__date">{event.date}</div>
                            <div className="event__time">{event.time}</div>
                            <div className="event__organizer">Brought to you by: {event.organizer.user.first_name} {event.organizer.user.last_name}</div>
                            <button onClick={() => history.push(`/events/edit/${event.id}`)}>Edit</button>
                            </section>
                        )
                    })}</article>
        </>)
}