import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addReservation } from "./features/reservationsSlice";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import CustomerCard from "./components/CustomerCard";

function App() {
  const dispatch = useDispatch();

  // onChange State for Input
  const [reservationNameInput, setReservationNameInput] = useState("");

  // getting State
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customer.value);
  const handleAddReservations = () => {
    if(!reservationNameInput) return;
    // dispatch the action
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("")
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => {
                setReservationNameInput(e.target.value);
              }}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
                key={customer.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;