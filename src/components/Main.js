import React from 'react';
import centreIslandPier from "../assets/centre-island-pier.png";

const Main = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Toronto Island Park</h1>
                    <div>
                        <img src={centreIslandPier} alt="Centre Island Pier"/>
                    </div>
                    <div>
                        <h2>About us Page</h2>
                        <p>The Toronto Islands provide a great, refreshing escape from downtown with a beautiful view of Lake Ontario on one side, and the city skyline on the other.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Contact Information</h2>
                        <p>First/Lost Children/Lost Parent<br/>
                        Station Lost and Found<br/>
                        Centre Island<br/>
                        Near the ferry dock<br/>
                        May to September<br/>
                        10:30 am to 5:30 pm<br/>
                        </p>
                        <p>Some wheelchairs are available to use for free on the fist come first served basis Government-issued ID is required</p>
                    </div>
                    <div>
                        <h2>Park Schedule</h2>
                        <p>Mon: 11:00 am - 6:00 pm<br/>
                        Tue: 11:00 am - 6:00 pm<br/>
                        Wed: 11:00 am - 5:00 pm<br/>
                        Thurs: 12:00 am - 7:00 pm<br/>
                        Fri: 10:00 am - 9:00 pm<br/>
                        Sat: 11:00 am - 9:00 pm<br/>
                        Sun: 11:00 am - 9:00 pm</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;