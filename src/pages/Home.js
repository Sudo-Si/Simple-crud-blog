import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firbase-config';
import { async } from '@firebase/util';

export default function Home() {

  const postsCollectionRef = collection(db, "posts")
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async ()=>{
      const data = await getDocs(postsCollectionRef );
   setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id
      })))
      // console.log(data.docs.map((doc)=>({...doc.data(), id:doc.id
      // })))
    }
    getPosts();
  },[]);
  const dltPost = async(id)=>{
    const postDoc= doc( db, "posts", id);
      await deleteDoc(postDoc);}
  return (<div className='homePage'>{postList.map((post)=>{
    return (
    <div className='post'>
      {" "}
    <div className='postHeader'>
      <div  div className='title'>
      <h1>{post.title}</h1>
      <div className='dltPost'> <button onClick={()=>{dltPost(post.id);}}> &#128465;</button></div>
       {/* <h3>@{post.author.name} </h3> */}
    </div>
    </div>
      <div className='postTextContainer'>{post.postText}</div>
   
      {/* <h3>@{post.author.name} </h3> */}<p>Spun by askillCalledLuck</p>
    </div>
   
    
    )
      })}  
      
      </div>
    
  )
}
