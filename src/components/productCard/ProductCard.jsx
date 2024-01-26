import React from 'react'

function ProductCard({allFood,loading}) {
  return (
    <div>
      <div className="main px-6 flex flex-wrap  ">
        <div className="submain w-full md:w-1/4 hover:translate-y-1   ">
            <div className="inner bg-red-400 hover:bg-red-500 p-3 rounded-xl m-3">
                <img src="https://dummyimage.com/720x400" className='rounded-xl' alt="" />
                <h2 className=' text-white font-bold pt-1'>This is title</h2>
                <h2 className=' text-white font-bold pt-1'>desc</h2>
                <div className="div flex justify-between py-2">
                    <button className='btn '>Add to card</button>
                    <button className='btn '>Buy Now</button>
                </div>
            </div>
        </div>

        <div className="submain w-full md:w-1/4 hover:translate-y-1   ">
            <div className="inner bg-red-400 hover:bg-red-500 p-3 rounded-xl m-3">
                <img src="https://dummyimage.com/720x400" className='rounded-xl' alt="" />
                <h2 className=' text-white font-bold pt-1'>This is title</h2>
                <h2 className=' text-white font-bold pt-1'>desc</h2>
                <div className="div flex justify-between py-2">
                    <button className='btn '>Add to card</button>
                    <button className='btn '>Buy Now</button>
                </div>
            </div>
        </div>

        <div className="submain w-full md:w-1/4 hover:translate-y-1   ">
            <div className="inner bg-red-400 hover:bg-red-500 p-3 rounded-xl m-3">
                <img src="https://dummyimage.com/720x400" className='rounded-xl' alt="" />
                <h2 className=' text-white font-bold pt-1'>This is title</h2>
                <h2 className=' text-white font-bold pt-1'>desc</h2>
                <div className="div flex justify-between py-2">
                    <button className='btn '>Add to card</button>
                    <button className='btn '>Buy Now</button>
                </div>
            </div>
        </div>

        <div className="submain w-full md:w-1/4 hover:translate-y-1   ">
            <div className="inner bg-red-400 hover:bg-red-500 p-3 rounded-xl m-3">
                <img src="https://dummyimage.com/720x400" className='rounded-xl' alt="" />
                <h2 className=' text-white font-bold pt-1'>This is title</h2>
                <h2 className=' text-white font-bold pt-1'>desc</h2>
                <div className="div flex justify-between py-2">
                    <button className='btn '>Add to card</button>
                    <button className='btn '>Buy Now</button>
                </div>
            </div>
        </div>

        <div className="submain w-full md:w-1/4 hover:translate-y-1   ">
            <div className="inner bg-red-400 hover:bg-red-500 p-3 rounded-xl m-3">
                <img src="https://dummyimage.com/720x400" className='rounded-xl' alt="" />
                <h2 className=' text-white font-bold pt-1'>This is title</h2>
                <h2 className=' text-white font-bold pt-1'>desc</h2>
                <div className="div flex justify-between py-2">
                    <button className='btn '>Add to card</button>
                    <button className='btn '>Buy Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
