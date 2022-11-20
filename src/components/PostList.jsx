import { useState, useEffect } from 'react';

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    // Make GET Request
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      Posts
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

// To fetch data, we need: useState + useEffect combination
