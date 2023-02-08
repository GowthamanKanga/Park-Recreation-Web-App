import React, { useState } from "react";
import BookingForm from "./BookingForm";
const mockData = [
  {
    id: 1,
    name: "Playground",
    location: "Area 1",
    image: "https://via.placeholder.com/150",
    description:
      "A playground with swings, slides and monkey bars for children to play on asdfdgdfgdfrgdfgdgadgftgdfdgfdgfd g  afdgdfg dfgafdgafdgadgafdgdagfdagfadgfdagfadgfadg.",
  },
  {
    id: 2,
    name: "Tennis Court",
    location: "Area 2",
    image: "https://via.placeholder.com/150",
    description: "A full-size tennis court with lights for evening play.",
  },
  {
    id: 3,
    name: "Basketball Court",
    location: "Area 3",
    image: "https://via.placeholder.com/150",
    description: "A regulation-size basketball court with adjustable hoops.",
  },
  {
    id: 4,
    name: "Soccer Court",
    location: "Area 4",
    image: "https://via.placeholder.com/150",
    description: "A regulation-size basketball court with adjustable hoops.",
  },
];

function FacilityList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState({});
  const [bookingForm, SetBookingPage] = useState("");

  const onClose = () => SetBookingPage(false);
  const handleView = (facility) => {
    setSelectedFacility(facility);
    setShowModal(true);
  };

  return (
    <div>
    </div>
  );
}

export default FacilityList;
