import React from 'react'
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    const isHomeRoute = location.pathname === '/';

  return (
    // <div className={`${ isHomeRoute ? 'bg-transparent' : 'bg-white' } py-4`}>
    //     <div className="md:px-32 px-4">
    //         Hame
    //     </div>
    // </div>

    <div className={`bg-transparent py-4`}>
        <div className="md:px-32 px-4">
            Hame
        </div>
    </div>
  )
}

export default Nav