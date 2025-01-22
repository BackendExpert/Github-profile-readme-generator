import React from 'react'

const CustomBtn = ({ type, bgColor, py, onClick, btnvalue, px }) => {
  return (
    <button
        className={
            `
            ${bgColor} ${py} ${px}
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