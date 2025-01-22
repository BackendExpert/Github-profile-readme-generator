import React, { useState } from 'react'
import CustomBtn from '../../components/Buttons/CustomBtn';


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

    const headlesubmit = (e) => {
        e.preventDefault()
        try{

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