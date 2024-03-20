import React from 'react'
import Premiere from "../Resources/premiere-tag.avif"
import AnyoneButYou from "../Resources/MoviePoster/AnyoneButYou.avif"
import AnyoneButYoubg from "../Resources/MoviePoster/AnyoneButYouBackground.avif"

const AnyoneButYouBannerCard = () => {
  return (
    <div className=' h-[480px] overflow-hidden relative flex justify-center'>
            <img src={AnyoneButYoubg} alt="" className='object-cover  w-full h-full ' />
            <div className='   absolute  top-5 h-[450px] w-[1200px] flex flex-col '>
                <div className=' bg-white w-72 absolute top-2  rounded-xl '>
                  <img src={AnyoneButYou} alt="" className='object-fill rounded-xl' />
                </div>
                <div className='w-96 h-64 left-80 relative '>
                  <div className=''>
                    <img src={Premiere} alt="" className='relative  w-[85px] top-24 ' />
                    <span className='relative rounded-xl right-10 top-[73px] bg-[#1F253A] text-xs  items-center px-5 py-[2px] text-white text-center'>Streaming Now</span>
                  </div>
                  <h2 className='relative right-[120px] text-white top-20 font-bold text-5xl'>Anyone But You</h2>
                  <div className='relative top-28 right-10'>
                    <p className=' text-white'><span>4K • English • Languages: </span><span className='text-[#F84464]'>Audio(2), Subtitle(1)</span></p>
                  </div>
                  <div className='relative top-32 right-2'>
                    <p className='text-white '><span>1h 44m • Comedy, Romantic • A • 19 Jan, 2024</span></p>
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

export default AnyoneButYouBannerCard