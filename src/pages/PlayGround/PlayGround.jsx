import React, { useState } from 'react'

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
    <div className='pt-24 px-24'>
        <div className="flex">
            <div className="w-1/4 mr-2">
                <div className="">
                    <form onSubmit={headlesubmit} method="post">
                        <input
                            type="text"
                            name="username"
                            value={gitusername.username}
                            placeholder='Github Username'
                            required
                            onChange={handleInputChange}
                            className='
                                w-full
                                h-12
                                bg-gray-100
                                border border-gray-200
                            '    
                        />

                        <div className="">
                            
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