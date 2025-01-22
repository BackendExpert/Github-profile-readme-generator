import React from 'react'
import { useLocation } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";

const Nav = () => {
    const location = useLocation();
    const isHomeRoute = location.pathname === '/';

  return (

    <div className={`${ isHomeRoute ? 'bg-transparent' : 'bg-white' } py-6`}>
        <div className="md:px-32 px-4">
            <div className="flex justify-between">
                <div className="flex">
                    <FaGithub className='h-8 w-auto fill-white'/>
                    <h1 className="pl-4 text-white font-semibold text-xl">GitHub Profile Readme Generator</h1>
                </div>
                <div className="">
                    <h1 className="text-white">Powered by <a className="text-blue-500 font-semibold" href="https://api.github.com/" target='_blank'>Github API</a> | <a className="text-blue-500 font-semibold" href="https://docs.github.com/en/rest" target='_blank'>GitHub REST API</a></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav