import React, { useState } from 'react';

const Seat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const seatPrice = 120;

  // Function to handle seat selection
  const handleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      let updatedSelectedSeats;
      // Toggle seat selection
      if (prevSelectedSeats.includes(seatNumber)) {
        updatedSelectedSeats = prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        updatedSelectedSeats = [...prevSelectedSeats, seatNumber];
      }

      // Check if any seats are selected
      const anySeatsSelected = updatedSelectedSeats.length > 0;
      setShowPayment(anySeatsSelected); // Show payment div if any seats are selected
      return updatedSelectedSeats;
    });
  };

  const calculateTotalAmount = () => {
    return selectedSeats.length * seatPrice;
  };

  const handlePayment = () => {
    // Logic to handle payment
    console.log('Payment initiated!');
  };

  return (
    <div className="container mx-auto p-4 relative">      
      <div className="grid grid-cols-12 gap-4">
        {/* Render seats */}
        {Array.from({ length: 96 }, (_, index) => (
          <button
            key={index}
            className={`border-2 rounded-md p-2 ${
              selectedSeats.includes(index + 1)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => handleSeatSelection(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {showPayment && ( // Render payment div only if seats are selected
        <div className="mt-4 fixed bottom-0 bg-slate-300 w-full z-10 h-14" onClick={handlePayment}>
          <div className='flex justify-center items-center relative'>
            <div className='bg-red-500 w-2/6 h-10 items-center rounded-md absolute top-2'>
              <p className="text-white text-center py-2 px-4">
                Pay Rs. ₹{calculateTotalAmount()}.00
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Seat;
