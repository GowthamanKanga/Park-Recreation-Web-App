import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function EventTicket({ visible, Onclose }) {
  const [formOpen, setFormOpen] = useState(true);

  const [response, setResponse] = useState("");

  
  const TicketID = localStorage.getItem("TicketID");

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/EventList/${TicketID}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        method: "GET",
        mode: "cors",
      })
      if (res.status != 200) {
        {
          setTimeout(() => {
            Swal.fire({
              title: "Time Out",
              text: "Ticket Purchase Time Out ! Repurchase Ticket",
              icon: "error",
              confirmButtonText: "ok",
            })
            navigate("/EventList")("false")
          },2000)
        }
      }
      const resp = await res.json();
      console.log(resp)

      const {

        ticketForm, 
      } = resp;
      SetTicketForm(ticketForm)
    }catch(err) {
      console.log(err.mess)
    }
  }

  const callback = useCallback(() => fetchData(), [TicketID])

  useEffect(() => {
    callback()
  }, [callback])

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      ticketForm,
    };

    try {
       const res = await fetch(`http://localhost/EventList/update${TicketID}`, {
       method: "PUT", 
       header: {
          "content-type" : "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(userData),
       })
       console.log(res);
      if (res.status == 200) {
        setResponse("true")
        {
          setTimeout(() => {
            setResponse("false")
          }, 1500)
        }
       }
      

       console.log(res.formData)
    } 
    catch(err) {
      console.log(err.message)
    }
  }

  if (!visible) return null;
  return (
    <div>
      <div className="fixed inset-0   bg-300 backdrop-blur-sm flex items-center justify-center">
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px] p-10 bg-white rounded">
            <form>
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="fName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="First Name"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="lName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder="Last Name"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <label
                  for="guest"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Number of Ticket you want to Order?
                </label>
                <input
                  type="number"
                  name="ticket"
                  id="ticket"
                  placeholder="5"
                  min="0"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="date"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="time"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none mr-4">
                  Submit
                </button>
                <button
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  onClick={Onclose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
