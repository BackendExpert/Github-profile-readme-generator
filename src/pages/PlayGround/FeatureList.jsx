import React, { useState } from 'react'

const FeatureList = ({ featureData, onInputChange }) => {
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
                            onChange={onInputChange}
                            className="mr-2"
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
                            onChange={onInputChange}
                            className="mr-2"
                        />
                        <span className='text-gray-500'>Followings</span>
                    </label>
                </div>
                <div className="mb-2">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="repos"
                            checked={featureData.repos}
                            onChange={onInputChange}
                            className="mr-2"
                        />
                        <span className='text-gray-500'>Repositories</span>
                    </label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FeatureList