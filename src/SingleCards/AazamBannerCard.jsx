import React from 'react'
import Aazambg from '../Resources/MoviePoster/AazamBackdround.avif'
import Aaazam from '../Resources/MoviePoster/Aazam.avif'
import Premiere from "../Resources/premiere-tag.avif"

const AazamBannerCard = () => {
    return (
        <div className=' h-[480px] overflow-hidden relative flex justify-center'>
            <img src={Aazambg} alt="" className='object-cover  w-full h-full ' />
            <div className='   absolute  top-5 h-[450px] w-[1200px] flex flex-col '>
                <div className=' bg-white w-72 absolute top-2  rounded-xl '>
                  <img src={Aaazam} alt="" className='object-fill rounded-xl' />
                </div>
                <div className='w-96 h-64 left-80 relative '>
                  <div className=''>
                    <img src={Premiere} alt="" className='relative  w-[85px] top-24 ' />
                    <span className='relative rounded-xl right-10 top-[73px] bg-[#1F253A] text-xs  items-center px-5 py-[2px] text-white text-center'>Streaming Now</span>
                  </div>
                  <h2 className='relative right-[120px] text-white top-20 font-bold text-5xl'>Aazam</h2>
                  <div className='relative top-28 right-10'>
                    <p className=' text-white'><span>4K • Hidi • Languages: </span><span className='text-[#F84464]'>Audio(1), Subtitle(1)</span></p>
                  </div>
                  <div className='relative top-32 right-2'>
                    <p className='text-white '><span>2h 8m • Crime, Mystery, Thriller • UA • 26 May, 2023</span></p>
                  </div>
                </div>
                <div className='relative top-10 font-semibold text-white right-24 '>
                  <button className='px-[70px] bg-[#f84464] py-3 mx-4 rounded-md'>Rent ₹59</button>
                  <button className='px-[70px] bg-[#f84464] py-3 rounded-md'>Buy ₹99</button>
                </div>
                <div></div>
            </div>
    
        </div>
      )
}

export default AazamBannerCard