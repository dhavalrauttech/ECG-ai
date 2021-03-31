import React from 'react'; 
import '../css/main.css';


import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
import BlogUpload from '../components/blogupload'; 

const NewBlog = () =>{

return(
        <div>
        <Navbar/>
        <BlogUpload/>
        <Footer/>
        </div>

);

	
};


export default NewBlog;