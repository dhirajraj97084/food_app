import React from 'react'

function SearchBar({search,setSearch,fetchFood}) {
  return (
    <div>
      <div className="main flex justify-center py-5">
        <div className="submain">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search here' className=' outline-none rounded-l-lg border-l-2 border-y-2 border-gray-900 bg-gray-400 px-3 py-2 md:w-80 placeholder:text-gray-800' />
        <button onClick={fetchFood} className=' text-white  px-3 bg-indigo-800 py-2 border-r-2 border-y-2 border-gray-900 rounded-r-lg'> Search </button>
        
        </div>
      </div>
    </div>
  )
}

export default SearchBar
