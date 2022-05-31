import React from 'react';
import header from '../../asset/header.png'
import Blog from '../Blog/Blog';
const Home = () => {
    return (
        <div>
            <img className='h-[100vh] w-[100vw] ' src={header} alt="" />
            <Blog></Blog>
        </div>
    );
};

export default Home;