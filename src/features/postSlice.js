import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('http://localhost:5000/posts');
  return response.data;
});

 const addPost = createAsyncThunk('posts/addPost', async (newPost) => {
  const response = await axios.post('http://localhost:5000/posts/add', newPost);
  return response.data;
});

const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost) => {
  const { id, title, content, author } = updatedPost;
  const response = await axios.post(`http://localhost:5000/posts/update/${id}`, { title, content, author });
  return response.data;
});

 const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  await axios.delete(`http://localhost:5000/posts/${id}`);
  return id;
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  //all methods
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(post => post._id === action.payload._id);
        state.posts[index] = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post._id !== action.payload);
      });
  },
});

export default postSlice.reducer;
export { fetchPosts, addPost, updatePost, deletePost };
