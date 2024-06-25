import React from 'react';
import './App.css';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import { Route, Routes,BrowserRouter  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
<Routes>
<Route path="/" element={<PostList/>}></Route>
<Route path="/add" element={< AddPost/>}></Route>


</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
