// App.jsx
import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

/**
* Request data and map to a component.
**/
function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);
   
  return (
    <div className="App">
      {posts.map(post => <PostDetail key={post.id} post={post}/>)}
    </div>
  );
}

export default App;
