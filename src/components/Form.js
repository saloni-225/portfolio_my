import "./FormStyles.css"
import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type="text"></input>
                <label>Your Email</label>
                <input type="email"></input>
                <label>Your Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here"></textarea>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form