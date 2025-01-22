import React, { useState } from 'react'

const FeatureList = () => {
    const [featureData, setfeatureData] = useState({
        followers: false,
        followings: false,
    })

    const handleInputChange = (e) => {
        const { name, checked } = e.target; // Use `checked` for checkboxes
        setfeatureData((prevData) => ({
          ...prevData,
          [name]: checked, // Update state based on the checkbox state
        }));
    };

  return (
    <div>
        <h1 className="text-gray-500 font-semibold">Features</h1>
        <div className="my-4 ml-2">
            <form action="" method="post">
                <div className="mb-2">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="followers"
                            checked={featureData.followers}
                            onChange={handleInputChange}
                            // className="mr-2"
                            className="mr-2 checked:bg-green-500"
                        />
                        <span className='text-gray-500'>Followers</span>
                    </label>
                    
                </div>
                <div className="mb-2">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="followings"
                            checked={featureData.followings}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <span className='text-gray-500'>Followings</span>
                    </label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FeatureList