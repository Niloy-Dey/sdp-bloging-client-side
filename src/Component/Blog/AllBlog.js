import React from 'react';
import { Link } from 'react-router-dom';

const AllBlog = ({blog}) => {
    const{  date, title , image,description } = blog
    return (
        <div className='my-20'>
            <div class="post card p-5 shadow-lg">
            <img src={ image} alt="" class="image h-[80vh] w-[100vw]"/>
            <div class="date text-orange-400 my-1 ">
                <i class="far fa-clock"></i>
                <span>1st may, 2021</span>
            </div>
            <h3 class="title text-xl font-bold py-2 ">blog title goes here</h3>
            <p class="text">{description} </p>
            <div class="links">
                <Link to="" class="user">
                    <i class="far fa-user"></i>
                    <span>by admin</span>
                </Link>
                <Link to="" class="icon">
                    <i class="far fa-comment"></i>
                    <span>(45)</span>
                    </Link>
                <Link to="" class="icon">
                    <i class="far fa-share-square"></i>
                    <span>(29)</span>
                    </Link>
            </div>
            </div>

        </div>
    );
};

export default AllBlog;