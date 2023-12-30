import React, { useEffect } from 'react'
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch()

    const appRouter= createBrowserRouter([
       {
        path: "/",
        element: <Login/>
       } ,
       {
        path: "/browse",
        element: <Browse/>
       },
    ]);

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: "https://avatars.githubusercontent.com/u/99192941?v=4" }));
            }else {
                // User is signed out
                dispatch(removeUser());
            }
        })
    }, [])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
