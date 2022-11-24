import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db, auth } from '../firbase-config';

export default function Home() {
const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const dltPost = async(id)=>{
    const postDoc= doc( db, "posts", id);
      await deleteDoc(postDoc);
    };
  useEffect(() => {
    const getPosts = async ()=>{
      const data = await getDocs(postsCollectionRef);
   setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
      // console.log(data.docs.map((doc)=>({...doc.data(), id:doc.id
      // })))
    };

    getPosts();
  },[dltPost]);
 
  return (
  <div className='homePage'>
    {postList.map((post)=>{
    return (
    <div className='post'>
     <div className='postHeader'>
      <div  div className='title'>
      <h1>The Yarn...</h1>
      <h1>{post.title}</h1>
      </div>
      <div className='dltPost'> 
      <button onClick={()=>{dltPost(post.id);}}>
         &#128465;</button>
         
      </div>
    </div>
    
   
      <div className='postTextContainer'>{post.postText}
          <h3>Spun By
        {post.author.name} </h3>
      </div>
    </div>
   )
      })}  
   </div>
   )
}
