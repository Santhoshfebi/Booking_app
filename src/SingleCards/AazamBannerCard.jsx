import React from 'react'
import Aazambg from '../Resources/MoviePoster/AazamBackdround.avif'
import Aaazam from '../Resources/MoviePoster/Aazam.avif'
import Premiere from "../Resources/premiere-tag.avif"

const AazamBannerCard = () => {
    return (
        <div className=' h-[480px] overflow-hidden relative flex justify-center'>
            <img src={Aazambg} alt="" className='object-cover  w-full h-full transform scale-100' />
            <div class="absolute inset-0 bg-gradient-to-l from-transparent via-black to-black"></div>
            <div className='   absolute  top-5 h-[450px] w-[1200px] flex flex-col '>
                <div className=' bg-white w-72 absolute top-2  rounded-xl '>
                  <img src={Aaazam} alt="" className='object-fill rounded-xl' />
                </div>
                <div className=' left-80 relative '>
                  <div className='relative'>
                    <img src={Premiere} alt="" className='absolute  w-[85px] top-24 ' />
                    <span className='absolute rounded-xl  bg-[#1F253A] text-xs top-24 left-24 px-5 py-[2px] text-white'>Streaming Now</span>
                  </div>
                  <h2 className='absolute  text-white top-32 font-bold text-4xl'>Aazam</h2>
                  <div className='absolute top-[190px] '>
                    <p className=' text-white'><span>4K • Hidi • Languages: </span><span className='text-[#F84464]'>Audio(1), Subtitle(1)</span></p>
                  </div>
                  <div className='absolute top-56'>
                    <p className='text-white '><span>2h 8m • Crime, Mystery, Thriller • UA • 26 May, 2023</span></p>
                  </div>
                <div className='absolute top-[270px] font-semibold text-white flex gap-3'>
                  <button className='px-[70px] bg-[#f84464] py-3  rounded-md'>Rent ₹59</button>
                  <button className='px-[70px] bg-[#f84464] py-3 rounded-md'>Buy ₹99</button>
                </div>
                </div>
                <div></div>
            </div>
        </div>
      )
}

export default AazamBannerCard