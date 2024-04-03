import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; 
import bmslogo from "../Resources/bms-logo.png";

import SignIn from '../Pages/SignIn';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginModalOpen = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  return (
    <nav className='h-18 flex justify-between px-36 '>
      <div className=' flex items-center my-1'>
        <img src={bmslogo} className='w-36' alt="" />
        <div className=' w-[550px] flex border-[1px] items-center px-5 py-1 rounded-[3px]'>
        <i class="bi bi-search text-xs  text-gray-500 "   ></i>
          <input type="search" placeholder='Search for Movies,Events,Plays,Sports and Activities' className='w-full px-5 font-normal outline-none'/>
        </div>
      </div>
      <div className='flex gap-7 items-center'> 
        <div className='flex gap-4 items-center'>
          <h5 className='text-sm'>Delhi-NCR</h5>
          <i className="bi bi-chevron-down text-xs"></i>
        </div>
        <div className='flex gap-4 items-center'>
        <button onClick={handleLoginModalOpen} className=' bg-[#F84464] rounded-[5px] text-[12px] text-white px-4 py-1'>Sign in</button>
        <i className="bi bi-list text-2xl"></i>
      </div>
      </div>
      
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <SignIn />
        </Modal.Body>
      </Modal>
    </nav>
  )
}

export default Navbar