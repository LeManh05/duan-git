import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const ProductsHeader = () => {
  return (
    <div className="flex py-3 px-4 bg-white fixed top-0 w-full z-50 mb-12">
      <button >
            <FontAwesomeIcon className="text-orange-400 leading-9 text-xl bg-gray-100 p-2 rounded-lg" icon={faHouse}/>
         </button>
         <button className="bg-gray-100 w-full ml-2 flex p-2 rounded-lg">
            <FontAwesomeIcon className ="flex items-center py-1 px-3 text-gray-400" icon={faMagnifyingGlass}/>
         <input className="w-full bg-gray-100 outline-none" type="search" placeholder="What do you want to find?"/>
         </button>
    </div>
  )
}

export default ProductsHeader