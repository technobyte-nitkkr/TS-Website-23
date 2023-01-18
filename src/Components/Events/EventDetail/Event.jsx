import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import Terminal from '../../Terminal/Terminal'
import "./style.css"

export default function Event({onClickOutside, show}) {
    const [events, setEvents] = useState(["AXIOM", "TOMCAT", "AXIOM","TOMCAT", "TOMCAT", "AXIOM","TOMCAT", "TOMCAT", "AXIOM","TOMCAT"])
    return (
        <Modal element={<EventDesc events={events} event="TOMCAT" image="/assets/event/dummy.png"/>} show={show} onClickOutside={onClickOutside}/>
    )
}

const EventDesc = ({events, event, image})=>{
    return (
        <div className="event-container">
            <div className="event-list">
                <div className="events">
                    <div className="event-top event-names">
                        <div>Hello World</div>
                    </div>
                    <div className='event-list-cont'>
                        {
                            events.map((e, ind)=>{
                                return <div className={`event-indivi ${event === e?"event-indivi-active":""}`}>{ind<9?"0":""}{ind + 1} <div>{e}</div></div>
                            })
                        }
                    </div>
                </div>
                <div className='event-terminal-container'>
                    <Terminal />
                </div>
            </div>
            <div className="event-description">
                <div className="event-top event-name">
                    <img src="/assets/event/menu.svg" alt="" />
                    <img src="/assets/event/git.svg" alt="" />
                    <img src="/assets/event/notification.svg" alt="" />
                </div>
                <div className="event-details">
                    <div className='event-heading'>{event}</div>
                    <img src={image} alt=""/>
                    <div>
                    Techspardha is the annual techno-managerial festival of National Institute of Technology, Kurukshetra. It started in 1995 as "Technospect" (later changed to Literati). The year 2013 marked the Golden Jubilee of NIT Kurukshetra, thus it was renamed as Techspardha. Etymologically, the word ‘Techspardha’ is composed of two words, ‘Tech’ in English is a contraction of technology and ‘Spardha’ in Hindi means competition. Techspardha is known for hosting a variety of events that include competitions, exhibitions, guest lectures as well as workshops. Techspardha is the annual techno-managerial festival of National Institute of Technology, Kurukshetra. It started in 1995 as "Technospect" (later changed to Literati). The year 2013 marked the Golden Jubilee of NIT Kurukshetra, thus it was renamed as Techspardha. Etymologically, the word ‘Techspardha’ is composed of two words, ‘Tech’ in English is a contraction of technology and ‘Spardha’ in Hindi means competition. Techspardha is known for hosting a variety of events that include competitions, exhibitions, guest lectures as well as workshops.
                    </div>
                </div>
            </div>
        </div>
    )
}
