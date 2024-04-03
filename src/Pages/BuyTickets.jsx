import React, { useState } from "react";
import bicycle from "../Resources/folding-bike.gif";
import scooter from "../Resources/scooter.png";
import auto from "../Resources/autorickshaw.png";
import car from "../Resources/car.png";
import bigcar from "../Resources/Bigcar.png";
import bus from "../Resources/bus.png";

export default function BuyTickets() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedImage, setSelectedImage] = useState(bicycle); // Set default image to bicycle

  const handleClick = (number) => {
    setSelectedNumber(number);
    switch (number) {
      case 1:
        setSelectedImage(bicycle);
        break;
      case 2:
        setSelectedImage(scooter);
        break;
      case 3:
        setSelectedImage(auto);
        break;
      case 4:
        setSelectedImage(car);
        break;
      case 5:
        setSelectedImage(bigcar);
        break;
      case 6:
        setSelectedImage(bigcar);
        break;
      case 7:
        setSelectedImage(bigcar);
        break;
      case 8:
        setSelectedImage(bus);
        break;
      case 9:
        setSelectedImage(bus);
        break;
      case 10:
        setSelectedImage(bus);
        break;
      default:
        setSelectedImage(null);
        break;
    }
  };

//   const handleHover = (number) => {
//     switch (number) {
//       case 1:
//         setSelectedImage(bicycle);
//         break;
//       case 2:
//         setSelectedImage(scooter);
//         break;
//       case 3:
//         setSelectedImage(auto);
//         break;
//       case 4:
//         setSelectedImage(car);
//         break;
//       case 5:
//       case 6:
//       case 7:
//         setSelectedImage(bigcar);
//         break;
//       case 8:
//       case 9:
//       case 10:
//         setSelectedImage(bus);
//         break;
//       default:
//         setSelectedImage(null);
//         break;
//     }
//   };

  return (
    <div className="ticket_card flex items-center justify-center bg-gray-700">
      <div className="w-[38%] shadow-2xl z-10 my-20 bg-white">
        <div className="flex items-center justify-center py-6 font-semibold">
          How Many Seats?
        </div>
        <div className="flex items-center justify-center mx-4 my-4">
          <div className="w-32 py-2">
            {selectedImage && (
              <img
                src={selectedImage}
                alt=""
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
        <div className=" mx-4 my-4 flex items-center justify-center gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <div
              key={number}
              className={`rounded-full h-8 w-8 flex items-center justify-center cursor-pointer hover:bg-[#F84464] ${
                selectedNumber === number && "bg-[#F84464]"
              }`}
              onClick={() => handleClick(number)}
            //   onMouseEnter={() => handleHover(number)}
            //   onMouseLeave={() => setSelectedImage(null)}
            >
              {number}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mx-4 my-4 text-xs gap-10 pt-6 pb-1 border-t border-gray-200">
          <div className="cat-info flex flex-col">
            <span className="category text-gray-500">VIP Box</span>
            <span className="cat-price text-gray-600 font-bold">
              Rs. 150.00
            </span>
            <span className="cat-status text-green-400 font-bold">
              Available
            </span>
          </div>

          <div className="cat-info flex flex-col">
            <span className="category text-gray-500">Silver className</span>
            <span className="cat-price text-gray-600 font-bold">
              Rs. 100.00
            </span>
            <span className="cat-status text-green-400 font-bold">
              Available
            </span>
          </div>
        </div>
        <button className="flex items-center justify-center  mx-12 my-4 w-[80%] h-10 bg-[#F84464] rounded-lg text-white font-bold">
          Select Seats
        </button>
      </div>
    </div>
  );
}
