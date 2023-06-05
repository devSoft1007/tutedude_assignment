import React from 'react'
import tutedudeLogo from '/icons/tutedude-logo.svg'
import profileIcon from '/icons/profile-icon.svg'
import arrowDown from '/icons/arrow-down.svg'
import useMediaQuery from '../../utils/useMediaQuery'

const Header = () => {
    const isSmall = useMediaQuery("(max-width: 730px)")
  return (
    <>
    <div className='header'>
     <div>
     <img src={tutedudeLogo} alt="tutedude-logo" />   
     </div>   
     <p>My Assignment</p>
     <p>Chat with Mentor</p>
     <div>
      <img src={profileIcon} />
       <p> ProfileName </p>
      <img src={arrowDown} />  
    </div>
    </div>
    </>
  )
}

export default Header