import { useState } from 'react';

export const PostForm = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [newPost, setNewPost] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make POST
    console.log(userId, title, body);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setNewPost(json))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
            type='text'
            placeholder='User ID'
          />
        </div>
        <div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type='text'
            placeholder='Title'
          />
        </div>
        <div>
          <input
            onChange={(e) => setBody(e.target.value)}
            value={body}
            type='text'
            placeholder='Body'
          />
        </div>
        <button type='submit'>POST</button>
      </form>
      <br />
      {newPost && <div>{newPost.title}</div>}
    </div>
  );
};
