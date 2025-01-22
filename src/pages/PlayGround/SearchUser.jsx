import React, { useState } from 'react'
import CustomBtn from '../../components/Buttons/CustomBtn';
import axios from 'axios';


const SearchUser = () => {
    const [gitusername, setgitusername] = useState({
        username: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setgitusername((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlesubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.get(import.meta.env.VITE_APP_API + '/users/' +  gitusername.username)
            .then(res => {
                localStorage.setItem('user', res.data.login)
                window.location.reload()
            })
            .catch(err => console.log(err))
        }
        catch(err){
            console.log(err)
        }
    }


  return (
    <div className="">
        <form onSubmit={headlesubmit} method="post">
            <div className="flex">
                <div className="">
                    <input
                        type="text"
                        name="username"
                        value={gitusername.username}
                        placeholder='Github Username'
                        required
                        onChange={handleInputChange}
                        className='
                            pl-2
                            w-full
                            h-10
                            bg-gray-100
                            border border-gray-200
                        '    
                    />
                </div>

                <div className="ml-2">
                    <CustomBtn 
                        type={'submit'}
                        py={'py-2'}
                        px={'px-4'}
                        bgColor={'bg-green-600'}
                        btnvalue={'Find'}
                    />
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchUser