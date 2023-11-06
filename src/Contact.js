import React from 'react';

function Contact() {
    return(
        <><div>
            <h1>Contact Us</h1>
        </div>
        <div>
            <p>First Name</p>
            <input type="text" placeholder="Enter your first name"/>
            <p>Last Name</p>
            <input type="text" placeholder="Enter your last name"/>
            <p>Phone Number</p>
            <input type="text" placeholder="Enter your phone number"/>
            <p>Email Address</p>
            <input type="text" placeholder="Enter your email address"/>
            <p>Country</p>
            <input type="text" placeholder="Enter your country"/>
            <p>Message</p>
            <input type="text" placeholder="Enter your message"/>
        </div></>
    );
}

export default Contact;