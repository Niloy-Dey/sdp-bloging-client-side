import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imge1 from '../../asset/img1.png'
import AllBlog from './AllBlog';
// import  './Blog.cs?s'
const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    })

    console.log(blogs);

    return (
        <div className='m-20'>

        {
            blogs?.map(blog => <AllBlog blog={blog} ></AllBlog>)
        }          

        </div>
    );
};

export default Blog;