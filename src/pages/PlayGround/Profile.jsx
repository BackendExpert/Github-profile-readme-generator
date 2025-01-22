import React from 'react'
import UserLogo from '../../assets/UserLogo.png'

const Profile = () => {
  return (
    <div>
        <center>
            <img src={UserLogo} alt="" className='h-40 w-auto'/>

            <p className="text-gray-500">Username</p>
        </center>
    </div>
  )
}

export default Profile