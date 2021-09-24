// PostDetail.jsx
import React, { useState } from "react";

/**
* Display and handle interactions of given post object.
**/
export default function PostDetails({post}){
   const [comments, setComments] = useState([]);
   const [hide, setHide] = useState(false)
   
  const handleComments = () => { 
    setHide(!hide);
    if(!hide) return setComments([]);
    (fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => response.json())
    .then(setComments)
    .catch(error => console.log(error)))
  }
  
  return (
    <div>
      <h3>{post.title}</h3>
      <p onClick={handleComments}>{post.body}</p>
      <ol>
        {comments.map(comment => {
          return (
            <li key={comment.id}>
                <p>{comment.body}</p>
            </li>
          )
        })}
      </ol>
    </div>  
  );
}
