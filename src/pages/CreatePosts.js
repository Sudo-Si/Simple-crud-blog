import React, { useState, useEffect } from 'react'
import {addDoc, collection} from "firebase/firestore"
import { auth, db } from '../firbase-config';
import {useNavigate} from "react-router-dom"

export default function CreatePosts({isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts")
  let navigate = useNavigate();

    const handleSubmit = async ()=>{
       await addDoc(postsCollectionRef, {
        title,
        postText,
        author:{name: auth.currentUser.displayName, id:auth.currentUser.uid},
       });
       navigate("/");
    };
  
    useEffect(() => {
     if (!isAuth){
      navigate("/login"); 
     }
    }, []);

  return (
    <div className='createPostPage'> 
    <div className="writeForm" >
      <div className="writeFormGroup">  
      <h1>Spin us a yarn</h1>     
        <input
          type="text"
          placeholder="Insert Epic Title..."
          className="writeInput"
          autoFocus={true}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div className="writeFormGroup">
        <textarea
          placeholder="Whats the Yarn..."
          type="text"
          className="writeInput writeText"
          onChange={(e)=>setPostText(e.target.value)}
        ></textarea>
      </div>
      <button className="writeSubmit" onClick={handleSubmit}>
        Spin Your Yarn 
      </button>
    </div>
    </div>
  


  )
}
