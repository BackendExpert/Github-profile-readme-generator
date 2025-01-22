import React, { useEffect, useState } from 'react'
import UserLogo from '../../assets/UserLogo.png'
import axios from 'axios'
import CustomBtn from '../../components/Buttons/CustomBtn'


const Profile = () => {
    const usertoken = localStorage.getItem('user')
    const [userdata, setuserdata] = useState([])

    // useEffect(() => {
    //     axios.get(import.meta.env.VITE_APP_API + '/users/' + usertoken)
    //     .then(res => setuserdata(res.data))
    //     .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        if (usertoken) {
          axios
            .get(`${import.meta.env.VITE_APP_API}/users/${usertoken}`)
            .then((res) => {
              setuserdata(res.data);
            })
            .catch((err) => {
              console.error('Error fetching user data:', err);
            });
        } else {
          console.log('User token is missing. Please log in again.');
        }
    }, [usertoken]);

    const headleClear = () => {
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div>
        <center>
            <img
                src={userdata?.avatar_url || UserLogo}
                alt="User Avatar"
                className="h-40 w-auto rounded-full"
            />
            {/* <p className="text-gray-500">{ userdata.login === null ? <span>username</span> : <span>{userdata.login}</span>}</p> */}
            <p className="text-gray-500">
                {userdata && userdata.login ? (
                    <span>{userdata.login}</span>
                ) : (
                    <span>username</span>
                )}
            </p>
            <CustomBtn 
                type={'button'}
                py={'py-1'}
                px={'px-4'}
                bgColor={'bg-red-600'}
                btnvalue={'Clear'}
                onClick={headleClear}
            />
        </center>
    </div>
  )
}

export default Profile