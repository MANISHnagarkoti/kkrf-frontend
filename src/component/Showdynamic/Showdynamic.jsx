import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Showdynamic = ({ children }) => {

    const [show, setShow] = useState(true)

    const location = useLocation()


    useEffect(() => {
        if (location.pathname === "/landing") {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [location])



    return (
        <div>

            {show && children}

        </div>
    )
}

export default Showdynamic
