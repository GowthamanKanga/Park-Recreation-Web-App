import React from "react";
//import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
//import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
//import { ReactComponent as Logo } from '../assets/logo.svg';
//import {ReactComponent as ArrowRight} from "../images/arrow-right.svg"
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { moment } from "moment";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Booking 1",
    name: "Dennis",
    facility: "Picnic Pavilion",
    start: new Date(2023, 1, 8, 12, 30),
    end: new Date(2023, 1, 8, 14, 30),
  },
  {
    title: "Booking 2",
    name: "Gowtham",
    facility: "Petting Zoo",
    start: new Date(2023, 1, 9, 19),
    end: new Date(2023, 1, 9, 21),
  },
  {
    title: "Booking 3",
    name: "Yaroslav",
    facility: "Hedge Maze",
    start: new Date(2023, 1, 10, 1, 23, 43),
    end: new Date(2023, 1, 10, 3, 23, 43),
  },
];

const Bookings = () => {
  return (
    <div>
      <div>
        <body className="bg-white">
          <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
            <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
              <a href="#" className="flex items-center">
                <span className="self-center whitespace-nowrap text-xl font-semibold">
                  GBC Park & Recreation
                </span>
              </a>
              <div className="mt-2 sm:mt-0 sm:flex md:order-2">
                <button
                  type="button"
                  className="rounde mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg"
                >
                  Register
                </button>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                id="navbar-sticky"
              >
                <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
                  <li>
                    <a
                      href="#"
                      className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                    >
                      Park List
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="pt-32  bg-white">
            <h1 className="text-center text-2xl font-bold text-gray-800">
              Facility List
            </h1>
          </div>

          <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Park Info</span>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Facilities</span>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>Booking</span>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
              <a>Event</a>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
              <span>Chat Forum</span>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
              <span>Map</span>
            </a>
          </div>
        </body>

        <div class="flex py-16 justify-center">
          <div class="mx-auto w-full max-w-[450px] shadow-md px-12 py-12 bg-white rounded-2xl">
            <div>
              <h1 class="text-gray-800 text-3xl font-bold text-center mb-4">
                Book a Facility
              </h1>
            </div>
            <form onsubmit="Submit();">
              <div class="mb-5">
                <label
                  class="mb-3 block text-base font-medium text-gray-800"
                  for="name "
                >
                  Name:{" "}
                </label>
                <input
                  class="w-full rounded-md border border-[] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2f3d44] focus:shadow-md"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div class="mb-5">
                <label
                  class="mb-3 block text-base font-medium text-gray-800"
                  for="facility"
                >
                  Facility:{" "}
                </label>
                <select
                  class="w-full rounded-md border border-[] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2f3d44] focus:shadow-md"
                  id="facility"
                >
                  <option selected hidden>
                    -- Select Facility --
                  </option>
                  <option>Picnic Pavilion</option>
                  <option value="defaultOption">Beach Firepit</option>
                  <option>Petting Zoo</option>
                  <option>Splash Pad</option>
                  <option>Hedge Maze</option>
                </select>
              </div>
              <div class="mb-5">
                <label
                  class="mb-3 block text-base font-medium text-gray-800"
                  for="date"
                >
                  Date:{" "}
                </label>
                <input
                  class="w-full rounded-md border border-[] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2f3d44] focus:shadow-md"
                  id="date"
                  type="date"
                ></input>
              </div>
              <div class="mb-5">
                <label
                  class="mb-3 block text-base font-medium text-gray-800"
                  for="time"
                >
                  Time:{" "}
                </label>
                <input
                  class="w-full rounded-md border border-[] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2f3d44] focus:shadow-md"
                  id="time"
                  type="time"
                ></input>
              </div>
              <div class="flex max-w-[200px] mx-auto justify-between">
                <button
                  class="mt-4 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700"
                  type="reset"
                  value="Reset"
                >
                  Clear
                </button>
                <button
                  class="mt-4 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700"
                  type="submit"
                  value="Submit"
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "100px" }}
        />
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
    </div>
  );
};

export default Bookings;
