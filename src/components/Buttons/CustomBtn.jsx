import React from 'react'

const CustomBtn = ({ type, bgColor, py, onClick, btnvalue }) => {
  return (
    <button
        className={
            `
            px-2
            ${bgColor} ${py}
            rounded
            text-white
            `
        }
        type={type}
        onClick={onClick}
    >
        {btnvalue}
    </button>
  )
}

export default CustomBtn