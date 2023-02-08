import React from 'react';
//import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
//import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
//import { ReactComponent as Logo } from '../assets/logo.svg';
//import {ReactComponent as ArrowRight} from "../images/arrow-right.svg"
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { moment } from "moment";

const locales = {
    "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
    format, parse, startOfWeek, getDay, locales
});

const events = [
    {
        title: "Booking 1",
        name: "Dennis",
        facility: "Picnic Pavilion",
        start: new Date(2023, 1, 8, 12, 30),
        end: new Date(2023, 1, 8, 14, 30)
    },
    {
        title: "Booking 2",
        name: "Gowtham",
        facility: "Petting Zoo",
        start: new Date(2023, 1, 9, 19),
        end: new Date(2023, 1, 9, 21)
    },
    {
        title: "Booking 3",
        name: "Yaroslav",
        facility: "Hedge Maze",
        start: new Date(2023, 1, 10, 1, 23, 43),
        end: new Date(2023, 1, 10, 3, 23, 43)
    },
]

const Bookings = () => {  

    return (
        <>
            <div>
                <div class="flex py-16 justify-center">
                    <div class="mx-auto w-full max-w-[450px] shadow-md px-12 py-12 bg-white rounded-2xl">
                        <div>
                            <h1 class="text-gray-800 text-3xl font-bold text-center mb-4">Book a Facility</h1>
                        </div>
                        <form onsubmit="Submit();">
                            <div class="mb-5">
                                <label class="mb-3 block text-base font-medium text-gray-800" for="name ">Name: </label>
                                <input class="w-full rounded-md border border-[] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2f3d44] focus:shadow-md" id="name" type="text" placeholder="Name"/>
                            </div>
                            <div class="mb-5">
                                <label class="mb-3 block text-base font-medium text-gray-800" for="facility">Facility: </label>
                                <select class="w-full rounded-md border border-[] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2f3d44] focus:shadow-md" id="facility">
                                    <option selected hidden >-- Select Facility --</option>
                                    <option>Picnic Pavilion</option>
                                    <option value="defaultOption">Beach Firepit</option>
                                    <option>Petting Zoo</option>
                                    <option>Splash Pad</option>
                                    <option>Hedge Maze</option>
                                </select>
                            </div>
                            <div class="mb-5">
                                <label class="mb-3 block text-base font-medium text-gray-800" for="date">Date: </label>
                                <input class="w-full rounded-md border border-[] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2f3d44] focus:shadow-md" id="date" type="date"></input>
                            </div>
                            <div class="mb-5">
                                <label class="mb-3 block text-base font-medium text-gray-800" for="time" >Time: </label>
                                <input class="w-full rounded-md border border-[] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2f3d44] focus:shadow-md" id="time" type="time"></input>
                            </div>
                            <div class="flex max-w-[200px] mx-auto justify-between">
                                <button class="mt-4 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700" type="reset" value="Reset">Clear</button>
                                <button class="mt-4 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700" type="submit" value="Submit">Book</button>
                            </div>
                    </form>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            <div>
                <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height: 500, margin: "100px"}} />
            </div>
            {/* <Calendar/> */}
            {/* <div class="container mx-auto px-4 py-2 md:pb-16">
                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="flex items-center justify-between py-2 px-6">
                        <div>
                            <span class="text-lg font-bold text-gray-800">February</span>
                            <span class="ml-1 text-lg text-gray-600 font-normal">2023</span>
                        </div>
                        <div>
                            <button type="button" class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center prev">
                                <ArrowLeft class="h-8 w-8"/>
                            </button>
                            <button type="button" class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center next">
                                <ArrowRight class="h-8 w-8"/>
                            </button>
                        </div>
                    </div>
                    <div class="-mx-1 -mb-1">
                        <div class="flex flex-wrap text-center font-bold border-t border-l weekdays">
                            <div class="w-[14.28%] px-2 py-2 border-r">SUNDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">MONDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">TUESDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">WEDNESDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">THURSDAY</div>
                            <div class="w-[14.28%] px-2 py-2 border-r">FRIDAY</div>
                            <div class="w-[14.28%] px-2 py-2">SATURDAY</div>
                        </div>
                        <div class="flex flex-wrap border-t border-l days">
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Bookings;