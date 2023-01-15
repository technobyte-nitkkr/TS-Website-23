import React from 'react'
import Button from '../Button/Button'
import "./style.css"

export default function Registration() {
    return (
        <div className='reg-container'>
            <h2>What is Techspardha 2023?</h2>
            <p>
            Techspardha is the annual techno-managerial festival of National Institute of Technology, Kurukshetra. It started in 1995 as "Technospect" (later changed to Literati). The year 2013 marked the Golden Jubilee of NIT Kurukshetra, thus it was renamed as Techspardha. Etymologically, the word ‘Techspardha’ is composed of two words, ‘Tech’ in English is a contraction of technology and ‘Spardha’ in Hindi means competition. Techspardha is known for hosting a variety of events that include competitions, exhibitions, guest lectures as well as workshops.
            </p>
            <form>
                <input type="text" name="username"  placeholder='Name*' required={true} className="reg-input"/>
                <input type="email" name="email"  placeholder='Email*' required={true} className="reg-input"/>
                <input type="text" name='current_city' placeholder='Current City*' required={true} className="reg-input"/>
                <div className='reg-mobile'>
                    <input type="text" name='country_code' defaultValue={"+91"} className="reg-input reg-countrycode"/> <input type="text" name='phone' placeholder='Whatsapp moblie number*' required={true} className="reg-input"/>
                </div>
                <textarea name="about_you" className="reg-input reg-textarea" placeholder='What qualities do you possess?'></textarea>
                <div className="buttonContainer">
                    <Button btnText="Register" symbol={"▶️"}/>
                </div>
            </form>
        </div>
    )
}