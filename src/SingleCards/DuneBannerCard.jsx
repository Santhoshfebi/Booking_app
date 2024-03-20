import React from 'react'
import Dune from "../Resources/MoviePoster/Dune.avif"
import Dunebg from "../Resources/MoviePoster/DuneBackground.avif"

const DuneBannerCard = () => {
  return (
    <div className=' h-[480px] overflow-hidden relative flex justify-center'>
            <img src={Dunebg} alt="" className='object-cover  w-full h-full transform scale-100 ' />
            <div class="absolute inset-0 bg-gradient-to-l from-transparent via-[#1A1A1A] to-[#1A1A1A]"></div>
            <div className='   absolute  top-4 h-[450px] w-[1200px] flex flex-col '>
                <div className=' bg-white w-72 absolute top-2  rounded-xl '>
                  <img src={Dune} alt="" className='object-fill rounded-xl' />
                </div>
                <div className='left-80 relative '>
                  <div className='relative'>
                    {/* <img src={Premiere} alt="" className='absolute  w-[85px] top-24 ' /> */}
                    <span className='absolute rounded-xl  bg-[#1F253A] text-xs top-24 left-0 px-5 py-[2px] text-white'>Streaming Now</span>
                  </div>
                  <h2 className='absolute  text-white top-32 font-bold text-4xl'>Dune</h2>
                  <div className='absolute top-[200px] '>
                    <p className=' text-white'><span>4K • English • Languages: </span><span className='text-[#F84464]'>Audio(2), Subtitle(1)</span></p>
                  </div>
                  <div className='absolute top-60'>
                    <p className='text-white '><span>2h 35m • Action, Advanture, Drama, Scifi • UA • 22 Oct, 2021</span></p>
                  </div>
                <div className='absolute top-[290px] font-semibold text-white flex gap-3'>
                  <button className='px-[70px] bg-[#f84464] py-3  rounded-md'>Rent ₹149</button>
                  <button className='px-[70px] bg-[#f84464] py-3 rounded-md'>Buy ₹689</button>
                </div>
                </div>
             </div>
        </div>
  )
}

export default DuneBannerCard