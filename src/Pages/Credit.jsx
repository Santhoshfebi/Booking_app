import React from 'react'

const Credit = () => {
  return (
    <div>
        <div className='pt-4'>
            <img src="https://in.bmscdn.com/offers/tncbanner/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?07122023114930" alt="" className='w-full '/>
        </div>
        <div className='w-full h-[109px] flex items-center justify-center bg-gray-100'>
            <div className='w-[86%] h-full flex gap-6'>
                <div className='w-[220px] h-full'>
                    <div className='text-start pt-8 text-sm text-gray-600'>VALID ON</div>
                    <div className='text-start text-sm h-[40%] mt-3'>Web & App</div>
                </div>
                <div className='w-[220px] h-full'>
                    <div className='text-start pt-8 text-sm text-gray-600'>QUOTAS</div>
                    <div className='text-start text-sm h-[40%] mt-3'>No Quotas</div>
                </div>
                <div className='w-[220px] h-full'>
                    <div className='text-start pt-8 text-sm text-gray-600'>VALID TILL</div>
                    <div className='text-start text-sm h-[40%] mt-3'>31-Mar-2026 23:59</div>
                </div>
                <div className='w-[220px] h-full'>
                    <div className='text-start pt-8 text-sm text-gray-600'>OTHER CONDITIONS</div>
                    <div className='text-start text-sm h-[40%] mt-3'>Available all days of the week</div>
                </div>
                <button className='w-40 px-2 ml-3 rounded-lg h-12 mt-[30px] bg-red-500 text-sm text-white font-bold'>BOOK NOW</button>
            </div>
        </div>
        <div className='h-36 w-full flex  justify-center'>
            <div className='absolute h-36 w-[7%] mr-[1270px] bg-gray-100'></div>
            <div className='absolute h-36 w-[7%] ml-[1270px] bg-gray-100'></div>
            <div className=' w-[86%] h-full'>
                <div className='w-full h-[80%] mt-7 pl-8 flex gap-7'>
                    <div className='h-full w-28 rounded-md '>
                        <div className='h-full w-full rounded-full overflow-hidden'>
                            <img src="https://in.bmscdn.com/offers/tnclogo/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?07122023114930" alt="" className='h-full w-full object-cover'/>
                        </div>
                    </div>
                    <div className='text-2xl py-10'>SBI SIGNATURE/ELITE CREDIT CARD OFFER</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Credit