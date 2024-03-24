import React from 'react'
import Premiere from "../Resources/premiere-tag.avif"
import AnyoneButYou from "../Resources/MoviePoster/AnyoneButYou.avif"
import AnyoneButYoubg from "../Resources/MoviePoster/AnyoneButYouBackground.avif"

const AnyoneButYouBannerCard = () => {
  return (
    <div className=' h-[480px] overflow-hidden relative flex justify-center'>
            <img src={AnyoneButYoubg} alt="" className='object-cover  w-full h-full transform scale-100 ' />
            <div class="absolute inset-0 bg-gradient-to-l from-transparent via-black to-black"></div>
            <div className='   absolute  top-5 h-[450px] w-[1200px] flex flex-col '>
                <div className=' bg-white w-72 absolute top-2  rounded-xl '>
                  <img src={AnyoneButYou} alt="" className='object-fill rounded-xl' />
                </div>
                <div className='left-80 relative '>
                  <div className='relative'>
                    <img src={Premiere} alt="" className='absolute  w-[85px] top-24 ' />
                    <span className='absolute rounded-xl  bg-[#1F253A] text-xs top-24 left-24 px-5 py-[2px] text-white'>Streaming Now</span>
                  </div>
                  <h2 className='absolute  text-white top-32 font-bold text-4xl'>Anyone But You</h2>
                  <div className='absolute top-[190px] '>
                    <p className=' text-white'><span>4K • English • Languages: </span><span className='text-[#F84464]'>Audio(2), Subtitle(1)</span></p>
                  </div>
                  <div className='absolute top-56'>
                    <p className='text-white '><span>1h 44m • Comedy, Romantic • A • 19 Jan, 2024</span></p>
                  </div>
                <div className='absolute top-[270px] font-semibold text-white flex gap-3'>
                  <button className='px-[70px] bg-[#f84464] py-3  rounded-md'>Rent ₹99</button>
                  <button className='px-[70px] bg-[#f84464] py-3 rounded-md'>Buy ₹499</button>
                </div>
                </div>
             </div>
        </div>
  )
}

export default AnyoneButYouBannerCard