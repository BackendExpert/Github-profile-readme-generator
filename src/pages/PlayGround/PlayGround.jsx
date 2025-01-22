import React, { useState } from 'react'
import CustomBtn from '../../components/Buttons/CustomBtn';

const PlayGround = () => {
    const [gitusername, setgitusername] = useState({
        username: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignindata((prevData) => ({
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
    <div className='pt-24 px-20'>
        <div className="flex">
            <div className="w-1/4 mr-2">
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
                                    bgColor={'bg-green-600'}
                                    btnvalue={'Find'}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full ml-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero saepe veritatis modi asperiores. Saepe quas amet est, minima eum expedita aliquid porro ratione officiis nobis unde ad corrupti praesentium?
            </div>
        </div>
    </div>
  )
}

export default PlayGround