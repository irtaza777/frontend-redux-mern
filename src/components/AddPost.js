import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/postSlice';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && author) {
      dispatch(addPost({ title, content, author }));
      setTitle('');
      setContent('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Post</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
