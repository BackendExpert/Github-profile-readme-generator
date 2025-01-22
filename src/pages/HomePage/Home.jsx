import React from 'react'
import { TfiGithub } from "react-icons/tfi";
import DefaultBtn from '../../components/Buttons/DefaultBtn';

const Home = () => {
  return (
    <div className='max-h-screen'>
        <div className="relative min-h-screen w-auto bg-[url(https://wallpapercave.com/wp/wp2370512.jpg)] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-40"></div> 
            <div className="relative py-[10%] z-20">
                <center>
                    <TfiGithub className='h-32 w-auto fill-white'/>

                    <div className="mt-4 text-white">
                        <h1 className="text-3xl font-semibold">GitHub Profile Readme Generator</h1>
                        <p className="">
                            Create you Github Readme file from here
                        </p>

                        <div className="my-4">
                            <DefaultBtn type={'button'} btnvalue={'Create Readme'}/>
                        </div>
                    </div>


                    <div className="my-4 text-white">
                        Don't have Github Account ? <a href="https://github.com/signup" className='text-blue-500' target='_blank'>Create Github Account</a>
                    </div>

                    <div className="my-4 text-white">
                        Developed and maintained by <a href="https://github.com/BackendExpert" target='_blank' className='text-blue-500'>JehanKandy</a>
                    </div>
                </center>
            </div>
        </div>
    </div>
  )
}

export default Home