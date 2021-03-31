import React from 'react';
import '../css/main.css';
import axios from 'axios';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import StartTest from '../components/startTest';

const AllStartTest = () =>{

    return(
        <div>
        <Navbar/>
        
          
            <StartTest/>
        
        <Footer/>
        </div>
    );
};
export default AllStartTest;