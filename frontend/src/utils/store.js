import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './features/projects/projectSlice';
import blogsReducer from './features/blogs/blogSlice';

export default configureStore({
  reducer: {
    projects: projectsReducer,
    blogs: blogsReducer,
  },
});