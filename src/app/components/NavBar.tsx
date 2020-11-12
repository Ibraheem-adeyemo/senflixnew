import React, { useEffect, useState} from 'react'

type NavBarProps = {}

export const NavBar:React.FC = () => {
    const [show, handleShow ] = useState(false)

    useEffect(() => {
        const scroll = () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        }
        window.addEventListener('scroll', scroll )
        return () => {
            window.removeEventListener('scroll', scroll);
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img
              className="nav_logo"
              src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
              alt="Netflix Logo" />

            <img
              className="nav_avatar"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
              alt="Netflix Logo" />
        </div>
    )
}