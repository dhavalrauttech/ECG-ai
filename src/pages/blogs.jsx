import React from 'react';
import '../css/main.css';
import axios from 'axios';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Blogs from '../components/blogs';

const AllBlogs = () =>{

    return(
        <div>
        <Navbar/>
        
          
            <Blogs/>
        
        <Footer/>
        </div>
    );
};
export default AllBlogs;