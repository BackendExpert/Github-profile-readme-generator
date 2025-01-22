import React from 'react'

const DefaultBtn = ({ type, btnvalue, onClick }) => {
  return (
    <button 
        className='bg-transparent py-2 px-4 rounded border border-white duration-500 hover:bg-white hover:text-black'
        type={type}
        onClick={onClick}
    >
        {btnvalue}
    </button>
  )
}

export default DefaultBtn