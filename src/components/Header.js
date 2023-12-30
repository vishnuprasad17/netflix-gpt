import React from 'react'
import { LOGO } from '../utils/constants'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error.
      navigate("/error");
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between'>
      <img
      className='w-44'
      src={LOGO} alt='logo' class='w-15 h-12 m-3' 
      />
      {user && <div className='flex p-2'>
      <img 
      className='w-12 h-12'
      alt='user-icon' 
      src={user?.photoURL} />
      <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
