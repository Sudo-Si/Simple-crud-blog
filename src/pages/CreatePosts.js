import React, { useState, useEffect } from 'react'
import {addDoc, collection} from "firebase/firestore"
import { auth, db } from '../firbase-config';

import {useNavigate} from "react-router-dom"

export default function CreatePosts({isAuth}) {
  
let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postsCollectionRef = collection(db, "posts")


    const handleSubmit = async ()=>{
       await addDoc(postsCollectionRef, 
        {title,postText,a2:auth.currentUser.displayName, author:{name: auth.currentUser.displayName, id:auth.currentUser.uid},
       } );
       navigate("/")
    }
  
    useEffect(() => {
     if(!isAuth){
      navigate("/login"); 
     }
    }, []);
  return (
    <div className='createPostPage'> 
    <form className="writeForm" >
      <div className="writeFormGroup">       
        <input
          type="text"
          placeholder="Insert Epic Title..."
          className="writeInput"
          autoFocus={true}
          onChange={e=>setTitle(e.target.value)}
        />
      </div>
      <div className="writeFormGroup">
        <textarea
          placeholder="Whats the Yarn..."
          type="text"
          className="writeInput writeText"
          onChange={e=>setPostText(e.target.value)}
        ></textarea>
      </div>
      <button className="writeSubmit" type="submit" onClick={handleSubmit}>
        Spin Your Yarn 
      </button>
    </form>
    </div>
  


  )
}
