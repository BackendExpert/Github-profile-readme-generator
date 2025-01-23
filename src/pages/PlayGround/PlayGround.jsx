import React, { useEffect, useState } from 'react'
import SearchUser from './SearchUser';
import Profile from './Profile';
import FeatureList from './FeatureList';
import axios from 'axios';

const PlayGround = () => {
    const usertoken = localStorage.getItem('user')

    const [featureData, setfeatureData] = useState({
        followers: false,
        followings: false,
        repos: false,
    })
    
    const handleInputChange = (e) => {
        const { name, checked } = e.target; // Use `checked` for checkboxes
        setfeatureData((prevData) => ({
        ...prevData,
        [name]: checked, // Update state based on the checkbox state
        }));
    };

    const [userdata, setuserdata] = useState([])


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

    const [pubrepos, setpubrepos] = useState([]) 

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/users/' + usertoken + '/' + 'repos?sort=updated&direction=desc')
        .then(res => setpubrepos(res.data))
        .catch(err => console.log(err))
        console.log()
    }, [])    



  return (
    <div className='pt-24 md:px-10'>
        <div className="md:flex">
            <div className="md:w-1/4 md:mr-2">
                <SearchUser />
                <hr className='my-2'/>
                <Profile />
                <hr className='my-2'/>
                <FeatureList featureData={featureData} onInputChange={handleInputChange}/>
            </div>
            <div className="w-full md:ml-2">
                {
                    !usertoken ?
                        <div className="my-6">
                            <h1 className="text-gray-500 text-2xl font-semibold">Welcome to GitHub Profile Readme Generator </h1>
                            <p className="my-4">Enter your github username and click Find</p>
                            <p className="my-4">After visible your account select features from features list</p>

                            <p className=""><span className='text-red-500'>Currently v1.0.0-beta1</span> so limited features are available </p>
                        </div> 
                    :
                        <div className="">
                            <h1 className=""> GitHub Username : {userdata.login}</h1>
                            <div className="mt-4">
                                <h2 className="font-semibold">Features:</h2>
                                <ul>
                                    {
                                        featureData.followers === false ? <div className=""></div> : <div className="">Followers : {userdata.followers}</div>
                                    }
                                    {
                                        featureData.followings === false ? <div className=""></div> : <div className="">Followings : {userdata.following}</div>
                                    }
                                    {
                                        featureData.repos === false ? <div className=""></div> : <div className="">Public Repositories : {userdata.public_repos}</div>
                                    }

                                    {
                                        featureData.repos === false ? <div className=""></div> :
                                        <div className="">
                                            <div className="md:grid grid-cols-2 gap-4">
                                                {
                                                    pubrepos.map((item, index) => {
                                                        return (
                                                            <div className="" key={index}>
                                                                {item.name}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    }
                                </ul>
                            </div>
                        </div>
                }
            
            </div>
        </div>
    </div>
  )
}

export default PlayGround