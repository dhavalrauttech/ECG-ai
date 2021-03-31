import React from 'react';
import '../css/main.css';
import axios from 'axios';

import Navbar from '../components/navbar';
import Blog from '../components/blog';
import Footer from '../components/footer';

const BlogPage = ({match}) => {
 


return (
            <div>
            <Navbar />
            <div className="mt-2 pt-md-3">
        <Blog match={match}/>
        </div>
            <Footer />
        </div>
    );
    
}

export default BlogPage;
