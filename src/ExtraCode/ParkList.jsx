import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Router, Route } from "react-router-dom";

// Array of park objects
const parks = [  { name: "High Park", location: "Toronto, ON", id: 1 },  { name: "Trinity Bellwoods Park", location: "Toronto, ON", id: 2 }];

// Main component that lists the parks
function ParkList(props) {
  // State hook to keep track of the current page number
  const [currentPage, setCurrentPage] = useState(1);

  // State hook to keep track of the number of parks to display per page
  const [parksPerPage, setParksPerPage] = useState(4);

  // State hook to keep track of the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // Hook to access the browser's history object to push a new URL to the history stack
  const history = useHistory();

  // Event handler to change the current page when a page number is clicked
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  // Event handler to navigate to the view page for a specific park when its "View" button is clicked
  const handleViewClick = (id) => {
    history.push(`/park/${id}`);
  };

  // Event handler to update the search term when the user types in the search input field
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Array of park objects filtered by the search term
  const filteredParks = parks.filter((park) =>
    park.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Index of the last park to be displayed on the current page
  const indexOfLastPark = currentPage * parksPerPage;

  // Index of the first park to be displayed on the current page
  const indexOfFirstPark = indexOfLastPark - parksPerPage;

  // Array of park objects to be displayed on the current page
  const currentParks = filteredParks.slice(indexOfFirstPark, indexOfLastPark);

  // Array of page numbers to be displayed as pagination links
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredParks.length / parksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // Router component from react-router-dom that provides routing functionality
    <Router>
      <div>
        <div className="bg-white p-12 rounded-md w-full mx-auto mt-10">
          <div className="flex items-center justify-between pb-6">
            {/* Section for the header of the park list */}
            <div>
              <h2 className="text-gray-600 font-semibold">Park List</h2>
              <span className="text-xs">All Parks</span>
            </div>

            {/* Section for the search input field */}
                        <div className="flex items-center justify-between">
              <input
                type="text"
                className="bg-gray-200 rounded-full p-2 w-64"
                placeholder="Search Parks"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>

          {/* Section for the list of parks */}
          <div className="pt-10">
            {currentParks.map((park) => (
              <div key={park.id} className="px-4 py-4 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-600">
                      {park.name}
                    </h3>
                    <span className="text-gray-400">{park.location}</span>
                  </div>
                  <button
                    className="bg-gray-300 px-3 py-2 rounded-full"
                    onClick={() => handleViewClick(park.id)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Section for the pagination links */}
          <div className="flex justify-center mt-10">
            {pageNumbers.map((number) => (
              <button
                key={number}
                id={number}
                className="px-4 py-2 m-2 text-sm font-medium bg-gray-300 rounded-full"
                onClick={handleClick}
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        {/* Route component from react-router-dom that displays the view page for a specific park */}
        <Route path="/park/:id" component={ParkView} />
      </div>
    </Router>
  );
}

export default ParkList;

