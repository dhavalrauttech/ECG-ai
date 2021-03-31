import React from 'react';
import '../css/main.css';
import axios from 'axios';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import NewDoctor from '../components/addDoctor';

const Adddoctor = () =>{

    return(
        <div>
        <Navbar/>
        
          
        <NewDoctor   />
        
        <Footer/>
        </div>
    );
};
export default Adddoctor;